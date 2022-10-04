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

    async saveProduct(product) {
        try {
            const prodId = await this.#productsDao.save(product)
            return prodId
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