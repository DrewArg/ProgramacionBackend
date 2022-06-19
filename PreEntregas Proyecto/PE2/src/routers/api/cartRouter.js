import { Router } from "express";
import cartController from "../../controllers/cartControllers.js";

const cartRouter = express.Router();

cartRouter.get("/carts/:id/products", cartController.productsInCart);

cartRouter.post("/carts", cartController.createCart);
cartRouter.post("/carts/:id/products", cartController.addProduct);

cartRouter.delete("/carts/:cartId", cartController.cartById);
cartRouter.delete(
  "/carts/:cartId/products/:productId",
  cartController.productById
);

export default cartRouter