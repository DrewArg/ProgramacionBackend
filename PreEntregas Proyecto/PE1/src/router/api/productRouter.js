const express = require("express");
const {
  productController,
  a,
} = require("../../controllers/productControllers.js");

const productRouter = express.Router();

function isAdmin(req, res, next) {
  if (req.query.currentUser === "Admin") {
    console.log("product router admin");
    next();
  } else {
    console.log("product router normal");
    res.status(401).json({ status: 404, description: "Usuario no autorizado" });
  }
}

productRouter.get("/products", productController.getAllProducts);

productRouter.post("/products/:id", productController.getById);

productRouter.post("/products", isAdmin, productController.createProduct);

productRouter.put("/products/:id", isAdmin, productController.productById);

productRouter.delete("/products/:id", isAdmin, productController.deleteById);

module.exports = productRouter;
