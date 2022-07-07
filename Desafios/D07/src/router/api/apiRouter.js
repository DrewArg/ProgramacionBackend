import express from "express";
import {
  productController,
  messageController,
} from "../../controllers/apiControllers.js";

const productRouter = express.Router();

productRouter.get("/products", productController.getAllProducts);
// productRouter.get("/products/:id", apiControllers.productById);

productRouter.post("/products", productController.save);

// productRouter.put("/products/:id", apiControllers.productById);

// productRouter.delete("/products/:id", apiControllers.productById);

const messageRouter = express.Router();

messageRouter.get("/messages", messageController.getAllMessages);


messageRouter.post("/messages", messageController.save);

export { productRouter, messageRouter };
