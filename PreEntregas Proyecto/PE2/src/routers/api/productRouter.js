import { Router } from "express";
import productController from "../../controllers/productControllers.js";

const productRouter = Router();

function isAdmin(req, res, next) {
  if (req.query.currentUser === "Admin") {
    next();
  } else {
    res.status(401).json({ status: 404, description: "Usuario no autorizado" });
  }
}

productRouter.get("/products", productController.getAllProducts);

productRouter.post("/products/:id", productController.getById);

productRouter.post("/products", isAdmin, productController.saveProduct);

productRouter.put("/products/:id", isAdmin, productController.updateProduct);

productRouter.delete("/products/:id", isAdmin, productController.deleteById);

export default productRouter;
