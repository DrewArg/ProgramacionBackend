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

    socket.on("saveProduct", async (saveProd) => {
      if (saveProd.currentUser !== "Admin") {
        socket.emit("unauthorized");
      } else {
        try {
          console.log(saveProd.product);
          await productController.saveProduct(saveProd.product);
        } catch (error) {
          console.error(
            "Socket --> no se pudo guardar el producto. Error: " + error
          );
        }
      }
    });

    socket.on("searchProduct", async (id) => {
      try {
        const prod = await productController.getById(id);
        socket.emit("foundProduct", prod);
      } catch (error) {
        console.error(
          "Socket --> no se pudo obtener el producto. Error: " + error
        );
      }
    });

    socket.on("updateProduct", async (updateProd) => {
      if (updateProd.currentUser !== "Admin") {
        socket.emit("unauthorized");
      } else {
        try {
          await productController.updateProduct(updateProd.product);
        } catch (error) {
          console.error(
            "Socket --> no se pudo actualizar el producto. Error: " + error
          );
        }
      }
    });

    socket.on("deleteProduct", async (id) => {
      try {
        socket.emit("deletedProduct", await productController.deleteById(id));
      } catch (error) {
        console.error("Socket --> no se pudo borrar el producto");
      }
    });

    // socket.on("product", async () => {
    //   io.sockets.emit("productById", await productController.productById());
    //   socket.emit("productById", await productController.productById());
    // });

    socket.on("getAllProducts", async () => {
      try {
        socket.emit("products", await productController.getAllProducts());
        io.sockets.emit("products", await productController.getAllProducts());
      } catch (error) {
        console.error(
          "Socket --> no se pudieron obtener los productos. Error: " + error
        );
      }
    });

    // socket.on("getActiveCartId", async () => {
    //   socket.emit("activeCartId", await cartIdController.getCurrentId());
    //   io.sockets.emit("activeCartId", await cartIdController.getCurrentId());
    // });

    // socket.on("getCartProductsById", async (getCartProductsById) => {
    //   socket.emit(
    //     "cartProductsById",
    //     await cartController.productsInCart(getCartProductsById)
    //   );
    // });
  });

  return io;
}

export default socketController;
