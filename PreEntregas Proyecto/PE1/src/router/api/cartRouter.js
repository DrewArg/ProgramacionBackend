const express = require("express");
const { cartController } = require("../../controllers/cartControllers.js");

const cartRouter = express.Router();

cartRouter.get("/carts/:id/products", cartController.productsInCart);

cartRouter.post("/carts", cartController.createCart);
cartRouter.post("/carts/:id/products", cartController.addProduct);

cartRouter.delete("/carts/:id", cartController.cartById);
cartRouter.delete("/carts/:cartId/products/:productId", cartController.productById);

module.exports = cartRouter;
