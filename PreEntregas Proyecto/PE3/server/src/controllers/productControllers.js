import { productsDao } from '../daos/daoIndex.js'

export const productController = {


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
            const prodId = await productsDao.saveObject(product)
            return prodId
        } catch (error) {
            console.error(`Product controller --> ${error}`);
        }
    },

    async getFeaturedProducts() {
        try {
            const products = await productsDao.listAll()
            if (products.length > 3) {
                const featured = products.splice(-4)
                return featured
            } else {
                return products
            }
        } catch (error) {
            console.error(`Product controller --> ${error}`);
        }
    }
}

export default productController