const { Server: Socket } = require("socket.io");

const { productController } = require("./productControllers");
const { cartController } = require("./cartControllers");
const { cartIdController } = require("./cartIdControllers");

function socketController(server) {
  const io = new Socket(server);
  io.on("connection", (socket) => {
    console.log("conexión nueva");

    socket.on("disconnect", () => {
      console.log("desconexión");
    });

    socket.on("searchProduct", async (id) => {
      socket.emit("foundProduct", await productController.getById(id));
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
      console.log("socket:" + getCartProductsById);
      socket.emit("cartProductsById", await cartController.productsInCart(getCartProductsById));
    });
  });

  return io;
}

module.exports = socketController;
