import {
  imagesControllers,
  usersControllers,
  productsControllers,
  cartsControllers,
  ordersControllers,
  templateControllers,
} from "../controllers/index.js";
import ImagesRouter from "./ImagesRouter.js";
import UsersRouter from "./UsersRouter.js";
import ProductsRouter from "./ProductsRouter.js";
import CartsRouter from "./CartsRouter.js";
import OrdersRouter from "./OrdersRouter.js";
import LoginRouter from "./LoginRouter.js";
import TemplateRouter from "./TemplateRouter.js";

export const imagesRouter = new ImagesRouter(imagesControllers).get();
export const usersRouter = new UsersRouter(usersControllers).get();
export const productsRouter = new ProductsRouter(productsControllers).get();
export const cartsRouter = new CartsRouter(cartsControllers).get();
export const ordersRouter = new OrdersRouter(ordersControllers).get();
export const loginRouter = new LoginRouter().get();
export const templateRouter = new TemplateRouter(templateControllers).get();
