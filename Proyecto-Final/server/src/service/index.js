import { imagesDao, usersDao, productsDao, cartsDao, ordersDao } from '../database/daos/daoIndex.js'
import ImagesService from './ImagesService.js'
import UsersService from './UsersService.js'
import ProductService from './ProductsService.js'
import CartsService from './CartsService.js'
import OrdersService from './OrdersService.js'

export const imagesService = new ImagesService(imagesDao)
export const usersService = new UsersService(usersDao)
export const productsService = new ProductService(productsDao)
export const cartsService = new CartsService(cartsDao)
export const ordersService = new OrdersService(ordersDao)
