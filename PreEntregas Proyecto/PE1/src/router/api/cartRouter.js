const express = require("express");
const { cartControllers } = require("../../controllers/cartControllers.js");

const cartRouter = express.Router();

cartRouter.get("/cart/:id/products", cartControllers.productsInCart);

cartRouter.post("/cart", cartControllers.createCart);
cartRouter.post("/cart/:id/products", cartControllers.addProduct);

cartRouter.delete("/cart/:id", cartControllers.cartById);
cartRouter.delete("/cart/:id/products/:id", cartControllers.productById);

module.exports = { cartRouter };
