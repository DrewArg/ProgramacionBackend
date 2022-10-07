import { imagesService, usersService, productsService, cartsService, ordersService, productListService } from "../service/index.js";
import ImagesControllers from "./ImagesControllers.js";
import UsersControllers from "./UsersControllers.js";
import ProductsControllers from "./ProductsControllers.js";
import CartsControllers from "./CartsControllers.js";
import OrdersControllers from "./OrdersControllers.js";
import ProductListControllers from "./ProductListControllers.js"

export const imagesControllers = new ImagesControllers(imagesService)
export const usersControllers = new UsersControllers(usersService)
export const productsControllers = new ProductsControllers(productsService)
export const cartsControllers = new CartsControllers(cartsService)
export const ordersControllers = new OrdersControllers(ordersService)
export const productListController = new ProductListControllers(productListService)

