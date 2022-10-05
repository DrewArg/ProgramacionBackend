import { productsDao } from '../database/daos/daoIndex.js'
import ProductService from './ProductsService.js'

const productService = new ProductService(productsDao)

export default productService