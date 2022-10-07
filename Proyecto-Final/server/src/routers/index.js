import { imagesControllers, productsControllers, cartsControllers, ordersControllers, } from '../controllers/index.js'
import ImagesRouter from "./ImagesRouter.js";
import ProductsRouter from "./ProductsRouter.js";
import CartsRouter from './CartsRouter.js'
import OrdersRouter from "./OrdersRouter.js";

export const imagesRouter = new ImagesRouter(imagesControllers).get()
export const productsRouter = new ProductsRouter(productsControllers).get()
export const cartsRouter = new CartsRouter(cartsControllers).get()
export const ordersRouter = new OrdersRouter(ordersControllers).get()