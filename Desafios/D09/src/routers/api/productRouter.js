import { Router } from "express";
import productController from "../../controllers/productControllers.js";

const productRouter = Router();

productRouter.get("/products", productController.getAllProducts);

productRouter.post("/products/:id", productController.getById);

productRouter.post("/products", productController.saveProduct);

productRouter.post("/products-test", productController.getTestProducts)

productRouter.put("/products/:id", productController.updateProduct);

productRouter.delete("/products/:id", productController.deleteById);

export default productRouter;
