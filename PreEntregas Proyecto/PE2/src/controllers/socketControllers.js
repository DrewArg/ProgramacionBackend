import { Server as Socket } from "socket.io";
import productController from "./productControllers.js";
import cartController from "./cartControllers.js";

function socketController(server) {
  const io = new Socket(server);
  io.on("connection", (socket) => {
    console.log("conexión nueva");

    socket.on("disconnect", () => {
      console.log("desconexión");
    });

    socket.on("searchProduct", async (id) => {
      try {
        const prod = await productController.getById(id);
        socket.emit("foundProduct", prod);
      } catch (error) {
        return {
          oops: "Socket --> no se pudo obtener el producto. Error: " + error,
        };
      }
    });
    socket.on("updateProduct", async (id) => {
      socket.emit("updatedProduct", await productController.getById(id));
    });

    socket.on("deleteProduct", async (id) => {
      console.log("socket delete");
      socket.emit("deletedProduct", await productController.deleteById(id));
    });

    socket.on("product", async () => {
      io.sockets.emit("productById", await productController.productById());
      socket.emit("productById", await productController.productById());
    });

    socket.on("getAllProducts", async () => {
      socket.emit("products", await productController.getAllProducts());
      io.sockets.emit("products", await productController.getAllProducts());
    });
    socket.on("getCartsIds", async () => {
      socket.emit("cartsIds", await cartController.getCartsIds());
      io.sockets.emit("cartsIds", await cartController.getCartsIds());
    });

    socket.on("getActiveCartId", async () => {
      socket.emit("activeCartId", await cartIdController.getCurrentId());
      io.sockets.emit("activeCartId", await cartIdController.getCurrentId());
    });

    socket.on("getCartProductsById", async (getCartProductsById) => {
      socket.emit(
        "cartProductsById",
        await cartController.productsInCart(getCartProductsById)
      );
    });
  });

  return io;
}

export default socketController;
