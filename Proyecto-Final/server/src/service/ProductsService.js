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
            next(error)
            winston.log('error', `productService -->  ${error}`)

        }
    }

    async saveProduct({ name, description, price, image }) {

        if (!name) throw new Error('MISSING_REQUIRED_PARAM')
        if (typeof name !== 'string') throw new Error('MISSING_REQUIRED_PARAM')
        if (!description) throw new Error('MISSING_REQUIRED_PARAM')
        if (typeof description !== 'string') throw new Error('MISSING_REQUIRED_PARAM')
        if (!price) throw new Error('MISSING_REQUIRED_PARAM')
        if (typeof price !== 'number') throw new Error('MISSING_REQUIRED_PARAM')
        if (!image) throw new Error('MISSING_REQUIRED_PARAM')
        if (typeof image !== 'string') throw new Error('MISSING_REQUIRED_PARAM')

        const product = new Product(name, description, price, image)
        return await this.#productsDao.saveObject(product.getProductData())

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