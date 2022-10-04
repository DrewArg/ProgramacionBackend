import Product from '../models/Product.js'
export default class ProductService {
    #productsDao

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

            await this.#productsDao.save(product)
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