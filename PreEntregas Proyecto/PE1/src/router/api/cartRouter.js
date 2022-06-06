const express = require("express");
const { cartController } = require("../../controllers/cartControllers.js");

const cartRouter = express.Router();

cartRouter.use((req, res, next) => {
  if (adminManage.isAdmin) {
    next();
  } else {
    res
      .status(401)
      .json({ status: 404, description: "Usuario no autorizado" });
  }
});

cartRouter.get("/carts/:id/products", cartController.productsInCart);

cartRouter.post("/carts", cartController.createCart);
cartRouter.post("/carts/:id/products", cartController.addProduct);

cartRouter.delete("/carts/:id", cartController.cartById);
cartRouter.delete("/carts/:id/products/:id", cartController.productById);

module.exports = cartRouter;
