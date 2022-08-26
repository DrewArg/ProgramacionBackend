import { cartsDao } from "../daos/daoIndex.js"
import apiCartController from "./api/apiCartControllers.js";

export const cartController = {

    async getAllCarts() {
        try {
            return await cartsDao.listAll()
        } catch (error) {
            console.error(`Product controller --> ${error}`);
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

    async getAllProducts(userId) {
        try {
            const carts = await cartsDao.listAll()
            const index = carts.findIndex((c) => c.userId.toString() === userId.toString())
            if (index === -1) {
                return ""
            } else {
                return carts[index].products
            }
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

    async updateCart(cart) {
        try {
            await cartsDao.updateObject(cart)
        } catch (error) {
            console.error(`Cart controller --> ${error}`);

        }
    },

    async deleteProduct(cartId, productId) {
        try {
            const userCart = apiCartController.getById(cartId)
            const products = this.getAllProducts(userCart)

            const index = products.findIndex(p => p.id == productId)

            products.splice(index, 1)
        } catch (error) {
            console.error(`Cart controller --> ${error}`);
        }
    }
}

export default cartController