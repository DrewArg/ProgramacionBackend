const express = require("express");
const {
  productControllers,
} = require("../../controllers/productControllers.js");

const productRouter = express.Router();

productRouter.get("/products", productControllers.products);
productRouter.get("/products/:id", productControllers.productById);

productRouter.post("/products", productControllers.products);

productRouter.put("/products/:id", productControllers.productById);

productRouter.delete("/products/:id", productControllers.productById);

module.exports = { productRouter };
