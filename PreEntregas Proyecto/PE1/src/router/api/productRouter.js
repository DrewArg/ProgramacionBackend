const express = require("express");
const {
  productController,
} = require("../../controllers/productControllers.js");

const productRouter = express.Router();

productRouter.use((req, res, next) => {
  if (adminManage.isAdmin) {
    next();
  } else {
    res.status(401).json({ status: 404, description: "Usuario no autorizado" });
  }
});

productRouter.get("/products", productController.products);
productRouter.get("/products/:id", productController.productById);

productRouter.post("/products", productController.products);

productRouter.put("/products/:id", productController.productById);

productRouter.delete("/products/:id", productController.productById);

module.exports = productRouter;
