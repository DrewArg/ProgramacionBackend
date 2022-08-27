import { Server as Socket } from "socket.io";
import { productController } from "./productControllers.js";
import { cartController } from "./cartControllers.js";
import { clientUrl } from '../config/config.js'
import { winston } from "./loggerControllers.js";

export function SocketController(server) {
  const socketServer = new Socket(server, {
    cors: {
      origin: clientUrl,
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    },
  });

  socketServer.on("connect", (expressSocket) => {
    (`new connection: ${expressSocket.id}`);

    expressSocket.on("disconnect", () => {
      (`disconnected: ${expressSocket.id}`);
    });

    expressSocket.on("saveProduct", async (product) => {
      try {
        await productController.saveProduct(product);
        socketServer.sockets.emit("products", await _tryGetAllProducts());
      } catch (error) {
        winston.log('error', `socketControllers -->  ${error}`)
      }
    });

    expressSocket.on("updateProduct", async (product) => {
      try {
        await productController.updateProduct(product);
        // socketServer.sockets.emit("products", await _tryGetAllProducts())
      } catch (error) {
        winston.log('error', `socketControllers -->  ${error}`)
      }
    });

    expressSocket.on("deleteProduct", async (productId) => {
      try {
        await productController.deleteById(productId);
        // socketServer.sockets.emit("products", await _tryGetAllProducts())
      } catch (error) {
        winston.log('error', `socketControllers -->  ${error}`)
      }
    });

    expressSocket.on("getAllProducts", async () => {
      try {
        socketServer.sockets.emit("products", await _tryGetAllProducts());
      } catch (error) {
        winston.log('error', `socketControllers -->  ${error}`)

      }
    });

    expressSocket.on("getFeaturedProducts", async () => {
      try {
        const featuredProds = productController.getFeaturedProducts();
        socketServer.sockets.emit("featuredProducts", await featuredProds);
      } catch (error) {
        winston.log('error', `socketControllers -->  ${error}`)
      }
    });

    expressSocket.on("getProductsInCart", async (userId) => {
      try {
        const products = await cartController.getAllProducts(userId);
        socketServer.sockets.emit("productsInCart", products);
      } catch (error) {
        winston.log('error', `socketControllers -->  ${error}`)
      }
    });

    expressSocket.on("deleteProductFromCart", async (cartId, productId) => {
      try {
        await cartController.deleteProduct(cartId, productId);
        // socketServer.sockets.emit("productsInCart", products)
      } catch (error) {
        winston.log('error', `socketControllers -->  ${error}`)
      }
    });

    expressSocket.on("addProductToCart", async (cartId, productId) => {
      try {
        await cartController.saveProduct(cartId, productId);
        // socketServer.sockets.emit("productsInCart", products)
      } catch (error) {
        winston.log('error', `socketControllers -->  ${error}`)
      }
    });
  });
}

async function _tryGetAllProducts() {
  try {
    const products = await productController.getAllProducts();
    return products;
  } catch (error) {
    winston.log('error', `socketControllers -->  ${error}`)
  }
}
