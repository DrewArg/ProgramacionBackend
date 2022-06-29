import { Server as Socket } from "socket.io";
import productController from "./productControllers.js";
import messageController from "./messageControllers.js";

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
        try {
          io.sockets.emit("products", await productController.getAllProducts());
        } catch (error) {
          console.error(
            `Socket controller --> no se pudieron obtener los productos. ${error}`
          );
        }
        try {
          socket.emit("products", await productController.getAllProducts());
        } catch (error) {
          console.error(
            `Socket controller --> no se pudieron obtener los productos. ${error}`
          );
        }
      } catch (error) {
        console.error(
          `Socket controller --> no se pudo guardar el producto. ${error}`
        );
      }
    });

    socket.on("getAllProducts", async () => {
      try {
        socket.emit("products", await productController.getAllProducts());
      } catch (error) {
        console.error(
          `Socket controller --> no se pudieron obtener los productos. ${error}`
        );
      }
      try {
        io.sockets.emit("products", await productController.getAllProducts());
      } catch (error) {
        console.error(
          `Socket controller --> no se pudieron obtener los productos. ${error}`
        );
      }
    });

    socket.on("getTestProducts", async (amount) => {
      try {
        socket.emit(
          "testProducts",
          await productController.getTestProducts(amount)
        );
      } catch (error) {
        console.error(
          `Socket controller --> no se pudieron obtener test products. ${error}`
        );
      }

      try {
        io.sockets.emit(
          "testProducts",
          await productController.getTestProducts(amount)
        );
      } catch (error) {
        console.error(
          `Socket controller --> no se pudieron obtener test products. ${error}`
        );
      }
    });

    socket.on("getAllMessages", async () => {
      try {
        socket.emit("messages", await messageController.getAllMessages());
      } catch (error) {
        console.error(
          `Socket controller --> no se pudieron obtener mensajes. ${error}`
        );
      }

      try {
        io.sockets.emit("messages", await messageController.getAllMessages());
      } catch (error) {
        console.error(
          `Socket controller --> no se pudieron obtener mensajes. ${error}`
        );
      }
    });

    socket.on("saveMessage", async (message) => {
      try {
        await messageController.saveMessage(message);

        try {
          socket.emit("messages", await messageController.getAllMessages());
        } catch (error) {
          console.error(
            `Socket controller --> no se pudieron obtener mensajes. ${error}`
          );
        }

        try {
          io.sockets.emit("messages", await messageController.getAllMessages());
        } catch (error) {
          console.error(
            `Socket controller --> no se pudieron obtener mensajes. ${error}`
          );
        }
      } catch (error) {
        console.error(
          `Socket controller --> no se pudo guardar el mensaje. ${error}`
        );
      }
    });
  });

  return io;
}

export default socketController;
