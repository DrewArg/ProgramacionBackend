import { Server as Socket } from "socket.io";
import productController from "./productControllers.js";
import messageController from "./messageControllers.js";
import userController from "./userControllers.js";

function socketController(server) {
  const socketServer = new Socket(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST", "PUT", "DELETE"]
    }
  });

  socketServer.on("connection", (expressSocket) => {
    console.log(`nueva conexión: ${expressSocket.id}`);
   
    expressSocket.on("disconnect", () => {
      console.log(`desconexión: ${expressSocket.id}`);
    });

    expressSocket.on("saveProduct", async (product) => {
      try {
        await productController.saveProduct(product);

        socketServer.sockets.emit("products", await _tryGetAllProducts());
        expressSocket.emit("products", await _tryGetAllProducts());
      } catch (error) {
        console.error(
          `Socket controller --> no se pudo guardar el producto. ${error}`
        );
      }
    });

    expressSocket.on("getAllProducts", async () => {
      expressSocket.emit("products", await _tryGetAllProducts());
      socketServer.sockets.emit("products", await _tryGetAllProducts());
    });

    expressSocket.on("getTestProducts", async (amount) => {
      expressSocket.emit("testProducts", await _tryGetTestProducts(amount));
      socketServer.sockets.emit("testProducts", await _tryGetTestProducts(amount));
    });

    expressSocket.on("getAllMessages", async () => {
      expressSocket.emit("messages", await _tryGetAllMessages());
      socketServer.sockets.emit("messages", await _tryGetAllMessages());
    });

    expressSocket.on("saveMessage", async (message) => {
      try {
        await messageController.saveMessage(message);

        expressSocket.emit("messages", await _tryGetAllMessages());
        socketServer.sockets.emit("messages", await _tryGetAllMessages());
      } catch (error) {
        console.error(
          `Socket controller --> no se pudo guardar el mensaje. ${error}`
        );
      }
    });

    expressSocket.on("getMockUserData", async () => {
      expressSocket.emit("mockUserData", await userController.getMockUserData())
    });
  });


  return socketServer;
}

export default socketController;

async function _tryGetAllMessages() {
  try {
    const messages = await messageController.getAllMessages();
    return messages
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
