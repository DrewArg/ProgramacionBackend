import { productsDao } from '../daos/daoIndex.js'

const productController = {
    async getById(id) {
        try {
            const prod = await productsDao.listById(id)
            return prod
        } catch (error) {
            console.error(`Product controller --> ${error}`);
        }
    },

    async updateProduct(product) {
        try {
            const prod = await productsDao.updateObject(product)
            return prod
        } catch (error) {
            console.error(`Product controller --> ${error}`);
        }
    },

    async deleteById(id) {
        try {
            await productsDao.deleteById(id)
            //TODO devolver estado de se elimino ok
        } catch (error) {
            console.error(`Product controller --> ${error}`);
        }
    },

    async getAllProducts() {
        try {
            return await productsDao.listAll()
        } catch (error) {
            console.error(`Product controller --> ${error}`);
        }
    },

    async saveProduct(product) {
        try {
            const prod = await productsDao.saveObject(product)
            return prod
        } catch (error) {
            console.error(`Product controller --> ${error}`);
        }
    }
}

export default productController