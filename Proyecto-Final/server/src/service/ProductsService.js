import { winston } from '../controllers/loggersControllers.js'
import Product from '../models/Product.js'

export default class ProductService {
    #productsDao
    /**
    * @param {dao} productsDao
    */
    constructor(productsDao) {
        this.#productsDao = productsDao
    }

    async getAllProducts() {
        try {
            return await this.#productsDao.listAll()
        } catch (error) {
            winston.log('error', `productService -->  ${error}`)

        }
    }

    async saveProduct(productData) {
        try {
            const product = new Product(productData.name, productData.description, productData.price, productData.image)
            console.log("service");
            console.log(product);
            await this.#productsDao.saveObject(product)
        } catch (error) {
            winston.log('error', `productControllers -->  ${error}`)
        }
    }

    async updateProduct(productId, productData) {
        //TODO completar esto
    }

    async deleteProduct(productId) {
        try {
            await this.#productsDao.deleteById(productId)
        } catch (error) {
            winston.log('error', `productControllers -->  ${error}`)
        }
    }

}