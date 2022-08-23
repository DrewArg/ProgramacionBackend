import { Server as Socket } from "socket.io";
import { productController } from "./productControllers.js";
import { cartController } from "./cartControllers.js";

export function SocketController(server) {
  const socketServer = new Socket(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    },
  });

  socketServer.on("connect", (expressSocket) => {
    (`new connection: ${expressSocket.id}`);

    expressSocket.on("disconnect", () => {
      (`disconnected: ${expressSocket.id}`);
    });

    //TODO PARA GUARDAR UN PRODUCTO TIENE QUE SER ADMIN - MIDDLEWARE DE ADMIN
    expressSocket.on("saveProduct", async (product) => {
      try {
        await productController.saveProduct(product);
        socketServer.sockets.emit("products", await _tryGetAllProducts());
      } catch (error) {
        console.error(`Socket controller --> ${error}`);
      }
    });

    //TODO PARA ACTUALIZAR UN PRODUCTO TIENE QUE SER ADMIN - MIDDLEWARE DE ADMIN
    expressSocket.on("updateProduct", async (product) => {
      try {
        await productController.updateProduct(product);
        // socketServer.sockets.emit("products", await _tryGetAllProducts())
      } catch (error) {
        console.error(`Socket controller --> ${error}`);
      }
    });

    //TODO PARA BORRAR UN PRODUCTO TIENE QUE SER ADMIN - MIDDLEWARE DE ADMIN
    expressSocket.on("deleteProduct", async (productId) => {
      try {
        await productController.deleteById(productId);
        // socketServer.sockets.emit("products", await _tryGetAllProducts())
      } catch (error) {
        ("else");

        console.error(`Socket controller --> ${error}`);
      }
    });

    expressSocket.on("getAllProducts", async () => {
      socketServer.sockets.emit("products", await _tryGetAllProducts());
    });

    expressSocket.on("getFeaturedProducts", async () => {
      try {
        const featuredProds = productController.getFeaturedProducts();
        socketServer.sockets.emit("featuredProducts", await featuredProds);
      } catch (error) {
        console.error(`Socket controller --> ${error}`);
      }
    });

    expressSocket.on("getProductsInCart", async (cartId) => {
      try {
        const products = await cartController.getAllProducts(cartId);
        socketServer.sockets.emit("productsInCart", products);
      } catch (error) {
        console.error(`Socket controller --> ${error}`);
      }
    });

    expressSocket.on("deleteProductFromCart", async (cartId, productId) => {
      try {
        await cartController.deleteProduct(cartId, productId);
        // socketServer.sockets.emit("productsInCart", products)
      } catch (error) {
        console.error(`Socket controller --> ${error}`);
      }
    });

    expressSocket.on("addProductToCart", async (cartId, productId) => {
      try {
        await cartController.saveProduct(cartId, productId);
        // socketServer.sockets.emit("productsInCart", products)
      } catch (error) {
        console.error(`Socket controller --> ${error}`);
      }
    });
  });
}

async function _tryGetAllProducts() {
  try {
    const products = await productController.getAllProducts();
    return products;
  } catch (error) {
    console.error(`Socket controller --> ${error}`);
  }
}
