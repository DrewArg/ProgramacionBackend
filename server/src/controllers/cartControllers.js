import { cartsDao } from "../daos/daoIndex.js"
import apiCartController from "./api/apiCartControllers.js";
import { winston } from "./loggerControllers.js";

export const cartController = {

    async getAllCarts() {
        try {
            return await cartsDao.listAll()
        } catch (error) {
            winston.log('error', `cartControllers -->  ${error}`)
        }
    },

    async deleteById(id) {
        try {
            await cartsDao.deleteById(id)
        } catch (error) {
            winston.log('error', `cartControllers -->  ${error}`)
        }
    },

    async getAllProducts(userId) {
        try {
            const carts = await cartsDao.listAll()
            const index = carts.findIndex((c) => c.userId.toString() === userId.toString())
            if (index === -1) {
                winston.log('warn', `cartControllers -->  no se encontró el carrito`)

                return ""
            } else {
                return carts[index].products
            }
        } catch (error) {
            winston.log('error', `cartControllers -->  ${error}`)
        }
    },

    async saveCart(cart) {
        try {
            const cartId = await cartsDao.saveObject(cart)
            return cartId
        } catch (error) {
            winston.log('error', `cartControllers -->  ${error}`)
        }
    },

    async updateCart(cart) {
        try {
            await cartsDao.updateObject(cart)
        } catch (error) {
            winston.log('error', `cartControllers -->  ${error}`)

        }
    },

    async deleteProduct(cartId, productId) {
        try {
            const userCart = apiCartController.getById(cartId)
            const products = this.getAllProducts(userCart)

            const index = products.findIndex(p => p.id == productId)

            products.splice(index, 1)
        } catch (error) {
            winston.log('error', `cartControllers -->  ${error}`)
        }
    }
}

export default cartController