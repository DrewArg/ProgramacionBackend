import ProductsRouter from "./ProductsRouter.js";
import CartsRouter from './CartsRouter.js'
import { cartsControllers, productsControllers } from '../controllers/index.js'

export const productsRouter = new ProductsRouter(productsControllers).get()

export const cartsRouter = new CartsRouter(cartsControllers).get()

