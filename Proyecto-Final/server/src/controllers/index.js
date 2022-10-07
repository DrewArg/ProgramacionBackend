import { imagesService, usersService, productsService, cartsService, ordersService } from "../service/index.js";
import ImagesControllers from "./ImagesControllers.js";
import UsersControllers from "./UsersControllers.js";
import ProductsControllers from "./ProductsControllers.js";
import CartsControllers from "./CartsControllers.js";
import OrdersControllers from "./OrdersControllers.js";

export const imagesControllers = new ImagesControllers(imagesService)
export const usersControllers = new UsersControllers(usersService)
export const productsControllers = new ProductsControllers(productsService)
export const cartsControllers = new CartsControllers(cartsService)
export const ordersControllers = new OrdersControllers(ordersService)

