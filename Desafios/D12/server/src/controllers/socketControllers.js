import { Server as Socket } from "socket.io";
import productController from "./productControllers.js";
import messageController from "./messageControllers.js";
import { userController } from "./userControllers.js";

function socketController(server) {
  const socketServer = new Socket(server, {
    cors: {
      origin: process.env.CORS_ORIGIN,
      methods: process.env.CORS_METHODS,
      credentials: process.env.CORS_CREDENTIALS
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
      } catch (error) {
        console.error(
          `Socket controller -->  ${error}`
        );
      }
    });

    expressSocket.on("getAllProducts", async () => {
      socketServer.sockets.emit("products", await _tryGetAllProducts());
    });

    expressSocket.on("getMockProductData", async () => {
      socketServer.sockets.emit("mockProductData", await _tryGetMockProductData());
    });

    expressSocket.on("getAllMessages", async () => {
      socketServer.sockets.emit("messages", await _tryGetAllMessages());
    });

    expressSocket.on("saveMessage", async (message) => {
      try {
        await messageController.saveMessage(message);
        socketServer.sockets.emit("messages", await _tryGetAllMessages());
      } catch (error) {
        console.error(
          `Socket controller -->  ${error}`
        );
      }
    });

    expressSocket.on("getMockUserData", async () => {
      try {
        expressSocket.emit("mockUserData", await userController.getMockUserData())
      } catch (error) {
        console.error("Socket controller -->  " + error);
      }
    });

    async function sendData(data) {
      expressSocket.emit("sendData", data)
    }

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
      `Socket controller --> ${error}`
    );
  }
}

async function _tryGetAllProducts() {
  try {
    const products = await productController.getAllProducts();
    return products;
  } catch (error) {
    console.error(
      `Socket controller -->  ${error}`
    );
  }
}

async function _tryGetMockProductData() {
  try {
    const testProducts = await productController.getMockProductData();
    return testProducts;
  } catch (error) {
    console.error(
      `Socket controller -->  ${error}`
    );
  }
}

