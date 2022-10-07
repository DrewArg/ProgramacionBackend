import { cartsDao, productsDao } from '../database/daos/daoIndex.js'
import CartsService from './CartsService.js'
import ProductService from './ProductsService.js'

export const productsService = new ProductService(productsDao)

export const cartsService = new CartsService(cartsDao)