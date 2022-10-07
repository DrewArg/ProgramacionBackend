import ProductsRouter from "./ProductsRouter.js";
import CartsRouter from './CartsRouter.js'
import { cartsControllers, ordersControllers, productsControllers } from '../controllers/index.js'
import OrdersRouter from "./OrdersRouter.js";

export const productsRouter = new ProductsRouter(productsControllers).get()

export const cartsRouter = new CartsRouter(cartsControllers).get()

export const ordersRouter = new OrdersRouter(ordersControllers).get()