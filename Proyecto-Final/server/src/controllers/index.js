import { cartsService, productsService } from "../service/index.js";
import CartsControllers from "./CartsControllers.js";
import ProductsControllers from "./ProductsControllers.js";

export const productsControllers = new ProductsControllers(productsService)

export const cartsControllers = new CartsControllers(cartsService)
