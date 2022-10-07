import { cartsDao, productsDao, ordersDao } from '../database/daos/daoIndex.js'
import CartsService from './CartsService.js'
import OrdersService from './OrdersService.js'
import ProductService from './ProductsService.js'

export const productsService = new ProductService(productsDao)

export const cartsService = new CartsService(cartsDao)

export const ordersService = new OrdersService(ordersDao)