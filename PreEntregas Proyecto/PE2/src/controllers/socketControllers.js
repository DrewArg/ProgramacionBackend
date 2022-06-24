import { Server as Socket } from "socket.io";
import productController from "./productControllers.js";
import cartController from "./cartControllers.js";
import cartIdController from "./cartIdControllers.js";

function socketController(server) {
  const io = new Socket(server);
  io.on("connection", (socket) => {
    console.log("conexión nueva");

    socket.on("disconnect", () => {
      console.log("desconexión");
    });

    socket.on("cartExist", async () => {
      socket.emit("cartExistResponse", await cartController.cartExist());
    });

    socket.on("saveCartId", async (cartId) => {
      const objId = {
        id: cartId,
      };
      await cartIdController.saveCartId(objId);
    });

    socket.on("saveProduct", async (saveProd) => {
      if (saveProd.currentUser !== "Admin") {
        socket.emit("unauthorized");
      } else {
        try {
          await productController.saveProduct(saveProd.product);
        } catch (error) {
          console.error(
            "Socket --> no se pudo guardar el producto. Error: " + error
          );
        }
      }
    });

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

    socket.on("deleteProductById", async (delProd) => {
      if (delProd.currentUser !== "Admin") {
        socket.emit("unauthorized");
      } else {
        try {
          await productController.deleteById(delProd.prodId);
        } catch (error) {
          console.error("Socket --> no se pudo borrar el producto");
        }
      }
    });

    socket.on("createCart", async () => {
      try {
        const cart = await cartController.createCart();
        socket.emit("cartCreated", cart);
      } catch (error) {
        console.error("Socket --> no se pudo crear el carrito. " + error);
      }
    });

    socket.on("addToCart", async (settings) => {
      try {
        const prod = await productController.getById(settings.productId);
        await cartController.addProduct(settings.cartId, prod);
      } catch (error) {
        console.error("Socket --> no se pudo agregar el producto " + error);
      }
    });

    socket.on("getCartProductsById", async () => {
      try {
        const cartId = await cartController.cartExist();
        try {
          socket.emit(
            "cartProductsById",
            await cartController.productsInCart(cartId)
          );
        } catch (error) {
          console.error("Socket --> no se pudo emitir el socket " + error);
        }
      } catch (error) {
        console.error("Socket --> no se pudo verificar si existen carritos");
      }
    });
  });

  return io;
}

export default socketController;
