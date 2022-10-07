import { ordersDao } from "../database/daos/daoIndex.js";
import { cartsService, productsService } from "../service/index.js";
import CartsControllers from "./CartsControllers.js";
import OrdersControllers from "./OrdersControllers.js";
import ProductsControllers from "./ProductsControllers.js";

export const productsControllers = new ProductsControllers(productsService)

export const cartsControllers = new CartsControllers(cartsService)

export const ordersControllers = new OrdersControllers(ordersDao)