import { cartsDao } from "../daos/daoIndex"

const cartController = {
    async getById(id) {
        try {
            const cart = await cartsDao.listById(id)
            return cart
        } catch (error) {
            console.error(`Cart controller --> ${error}`);
        }
    },

    async deleteById(id) {
        try {
            await cartsDao.deleteById(id)
            //TODO devolver estado de se elimino ok
        } catch (error) {
            console.error(`Cart controller --> ${error}`);
        }
    },

    async getAllProducts(cartId) {
        try {
            const userCart = this.getById(cartId)
            return userCart.products
        } catch (error) {
            console.error(`Cart controller --> ${error}`);
        }
    },

    async saveCart(cart) {
        try {
            const cartId = await cartsDao.saveObject(cart)
            return cartId
        } catch (error) {
            console.error(`Cart controller --> ${error}`);
        }
    },

    async saveProduct(cartId, productId) {
        try {
            const userCart = this.getById(cartId)
            userCart.products.push(productId)
            //TODO RETURN STATUS CODE OK
        } catch (error) {
            console.error(`Cart controller --> ${error}`);
        }
    },

    async deleteProduct(cartId, productId) {
        try {
            const userCart = this.getById(cartId)
            const products = this.getAllProducts(userCart)

            const index = products.findIndex(p => p.id == productId)

            products.splice(index, 1)
        } catch (error) {
            console.error(`Cart controller --> ${error}`);
        }
    }
}

export default cartController