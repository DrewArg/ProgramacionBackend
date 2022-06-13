import { Server as Socket } from "socket.io";
import { productController, messageController } from "./apiControllers.js";

function socketController(server) {
  const io = new Socket(server);
  io.on("connection", (socket) => {
    console.log("conexión nueva");

    socket.on("disconnect", () => {
      console.log("desconexión");
    });

    socket.on("product", async () => {
      io.sockets.emit("products", await productController.getAllProducts());
      socket.emit("products", await productController.getAllProducts());
    });

    socket.on("getAllProducts", async () => {
      socket.emit("products", await productController.getAllProducts());
      io.sockets.emit("products", await productController.getAllProducts());
    });

    socket.on("getAllMessages", async () => {
      socket.emit("messages", await messageController.getAllMessages());
      io.sockets.emit("messages", await messageController.getAllMessages());
    });
  });

  return io;
}

export default  socketController ;
