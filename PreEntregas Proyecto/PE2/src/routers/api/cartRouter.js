import { Router } from "express";
import cartController from "../../controllers/cartControllers.js";

const cartRouter = Router();

cartRouter.get("/carts/:id/products", cartController.productsInCart);

cartRouter.post("/carts", cartController.saveCart);
cartRouter.post("/carts/:id/products", cartController.addProduct);

cartRouter.delete("/carts/:cartId", cartController.deleteById);
cartRouter.delete(
  "/carts/:cartId/products/:productId",
  cartController.deleteProductById
);

export default cartRouter;
