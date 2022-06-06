const express = require("express");
const {
  productController,
  a,
} = require("../../controllers/productControllers.js");

const productRouter = express.Router();

function isAdmin(req, res, next) {
  if (currentUser === "Admin") {
    next();
  } else {
    res.status(401).json({ status: 404, description: "Usuario no autorizado" });
  }
}

productRouter.get("/products", productController.getAllProducts);

productRouter.get("/products/:id", productController.getById);

productRouter.post("/products", isAdmin, productController.createProduct);

productRouter.put("/products/:id", isAdmin, productController.productById);

productRouter.delete("/products/:id", isAdmin, productController.productById);

module.exports = productRouter;
