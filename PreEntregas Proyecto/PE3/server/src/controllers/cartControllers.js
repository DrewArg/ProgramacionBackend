import { cartsDao, productsDao } from "../daos/daoIndex.js"

export const cartController = {

    async getAllCarts() {
        try {
            return await cartsDao.listAll()
        } catch (error) {
            console.error(`Product controller --> ${error}`);
        }
    },

    async getById(req, res) {
        try {
            if (req.session.passport) {
                const bars = await req.originalUrl.split("/")
                const split = bars[3].split(":")
                const cart = await cartsDao.listById(split[2])
                return cart
            }
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

    async getCartProducts(req, res) {
        try {
            if (req.session.passport) {
                const userId = req.session.passport.user
                const carts = await cartsDao.listAll()
                const index = carts.findIndex((c) => c.userId.toString() === userId.toString())
                if (index === -1) {
                    res.json("no se encontró el carrito")
                } else {
                    res.status(200).json(carts[index].products)
                }
            } else {
                res.json("")
            }
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

    async saveProduct(req, res) {
        try {
            if (req.session.passport) {
                const bars = await req.originalUrl.split("/")
                const prodId = bars[3].split(":")
                const product = await productsDao.listById(prodId[1])
                const quantity = bars[4].split(":")
                product.quantity = quantity[1]

                const userId = req.session.passport.user
                const carts = await cartsDao.listAll()
                const cartIndex = carts.findIndex((c) => c.userId.toString() === userId.toString())
                const productsInCart = await this.getAllProducts(userId)
                const prodsIndex = productsInCart.findIndex((pc) => pc.id === prodId[1])
                if (prodsIndex === -1) {
                    carts[cartIndex].products.push(product)
                } else {
                    let dbQty = parseInt(productsInCart[prodsIndex].quantity)
                    let currQty = parseInt(quantity[1])
                    let result = dbQty + currQty
                    productsInCart[prodsIndex].quantity = result
                    carts[cartIndex].products[prodsIndex].quantity = result
                }
                await this.updateCart(carts[cartIndex])
                res.status(200).json("ok")
            } else {
                res.json("usuario sin loguear")
            }


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