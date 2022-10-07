import Product from '../models/Product.js'

export default class ProductsService {
    #productsDao
    /**
    * @param {dao} productsDao
    */
    constructor(productsDao) {
        this.#productsDao = productsDao
    }

    async getById(id) {
        return await this.#productsDao.listById(id)

    }

    async getAllProducts() {
        return await this.#productsDao.listAll()

    }

    async saveProduct({ name, description, price, image }) {
        const product = new Product(name, description, price, image)
        return await this.#productsDao.saveObject((product.getProductData()))

    }

    async updateProduct(productId, productData) {
        const updated = await this.#productsDao.updateObject(productId, JSON.parse(JSON.stringify(productData)))
        return updated
    }

    async deleteProduct(productId) {
        await this.#productsDao.deleteById(productId)
    }

}