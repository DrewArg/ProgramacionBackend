import { imagesService, productsService, cartsService, ordersService } from "../service/index.js";
import ImagesControllers from "./ImagesControllers.js";
import ProductsControllers from "./ProductsControllers.js";
import CartsControllers from "./CartsControllers.js";
import OrdersControllers from "./OrdersControllers.js";

export const imagesControllers = new ImagesControllers(imagesService)
export const productsControllers = new ProductsControllers(productsService)
export const cartsControllers = new CartsControllers(cartsService)
export const ordersControllers = new OrdersControllers(ordersService)

