import { Server as Socket } from "socket.io";
import productController from "./productControllers.js";
import messageController from "./messageControllers.js";
import userController from "./userControllers.js";
import { normalizeMessages, denormalizeMessages } from "../utils/normalizor.js";

function socketController(server) {
  const io = new Socket(server);
  io.on("connection", (socket) => {
    console.log("conexión nueva");

    socket.on("disconnect", () => {
      console.log("desconexión");
    });

    socket.on("saveProduct", async (product) => {
      try {
        await productController.saveProduct(product);

        io.sockets.emit("products", await _tryGetAllProducts());
        socket.emit("products", await _tryGetAllProducts());
      } catch (error) {
        console.error(
          `Socket controller --> no se pudo guardar el producto. ${error}`
        );
      }
    });

    socket.on("getAllProducts", async () => {
      socket.emit("products", await _tryGetAllProducts());
      io.sockets.emit("products", await _tryGetAllProducts());
    });

    socket.on("getTestProducts", async (amount) => {
      socket.emit("testProducts", await _tryGetTestProducts(amount));
      io.sockets.emit("testProducts", await _tryGetTestProducts(amount));
    });

    socket.on("getAllMessages", async () => {
      socket.emit("messages", await _tryGetAllMessages());
      io.sockets.emit("messages", await _tryGetAllMessages());
    });

    socket.on("saveMessage", async (message) => {
      try {
        await messageController.saveMessage(message);

        socket.emit("messages", await _tryGetAllMessages());
        io.sockets.emit("messages", await _tryGetAllMessages());
      } catch (error) {
        console.error(
          `Socket controller --> no se pudo guardar el mensaje. ${error}`
        );
      }
    });

    socket.on("getMockUserData", async () => {
      socket.emit("mockUserData", await userController.getMockUserData())
    });


  });


  return io;
}

export default socketController;

async function _tryGetAllMessages() {
  try {
    const messages = await messageController.getAllMessages();
    const normalizedMessages = normalizeMessages(messages);
    return normalizedMessages
  } catch (error) {
    console.error(
      `Socket controller --> no se pudieron obtener mensajes. ${error}`
    );
  }
}

async function _tryGetAllProducts() {
  try {
    const products = await productController.getAllProducts();
    return products;
  } catch (error) {
    console.error(
      `Socket controller --> no se pudieron obtener los productos. ${error}`
    );
  }
}

async function _tryGetTestProducts(amount) {
  try {
    const testProducts = await productController.getTestProducts(amount);
    return testProducts;
  } catch (error) {
    console.error(
      `Socket controller --> no se pudieron obtener test products. ${error}`
    );
  }
}
