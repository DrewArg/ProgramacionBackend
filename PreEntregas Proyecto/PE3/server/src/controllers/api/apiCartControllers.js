import { cartsDao, productsDao } from "../../daos/daoIndex.js"
import cartController from "../cartControllers.js"
export const apiCartController = {

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

    async deleteProductById(req, res) {
        try {
            if (req.session.passport) {
                const userId = req.session.passport.user
                const carts = await cartsDao.listAll()
                const index = carts.findIndex((c) => c.userId.toString() === userId.toString())

                if (index === -1) {
                    res.json("no se encontró el carrito")

                } else {
                    const prodId = req.body.productId
                    const productsInCart = await cartController.getAllProducts(userId)
                    const prodsIndex = productsInCart.findIndex((pc) => pc.id === prodId)

                    if (prodsIndex === -1) {
                        res.json("no se encontró el producto")

                    } else {
                        carts[index].products.splice(prodsIndex, 1)
                        await cartsDao.updateObject(carts[index])
                        res.status(200).json("ok")
                    }
                }
            }
        } catch (error) {
            console.error(`Api Product controller --> ${error}`);
        }
    },

    async updateProduct(req, res) {
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
                const productsInCart = await cartController.getAllProducts(userId)
                const prodsIndex = productsInCart.findIndex((pc) => pc.id === prodId[1])
                if (prodsIndex === -1) {
                    carts[cartIndex].products.push(product)
                } else {
                    let currQty = parseInt(quantity[1])
                    carts[cartIndex].products[prodsIndex].quantity = currQty
                }
                await cartController.updateCart(carts[cartIndex])
                res.status(200).json("ok")
            } else {
                res.json("usuario sin loguear")
            }


        } catch (error) {
            console.error(`Cart controller --> ${error}`);
        }
    },

    async saveProduct(req, res) {
        try {
            if (req.session.passport) {
                const prodId = req.body.prodId
                const quantity = req.body.quantity
                const product = await productsDao.listById(prodId)
                const userId = req.session.passport.user
                const carts = await cartsDao.listAll()
                const cartIndex = carts.findIndex((c) => c.userId.toString() === userId.toString())
                const productsInCart = await cartController.getAllProducts(userId)
                const prodsIndex = productsInCart.findIndex((pc) => pc.id === prodId)

                if (prodsIndex === -1) {
                    product.quantity = parseInt(quantity)
                    carts[cartIndex].products.push(product)
                } else {
                    let dbQty = 0
                    let currQty = parseInt(quantity)

                    if (!productsInCart[prodsIndex].quantity) {
                        productsInCart[prodsIndex].quantity = 0
                    } else {
                        dbQty = productsInCart[prodsIndex].quantity
                        let result = dbQty + currQty
                        productsInCart[prodsIndex].quantity = result
                        carts[cartIndex].products[prodsIndex].quantity = result
                    }
                }

                await cartController.updateCart(carts[cartIndex])
                res.status(200).json("ok")
            } else {
                res.json("usuario sin loguear")
            }


        } catch (error) {
            console.error(`Cart controller --> ${error}`);
        }
    },

}

export default apiCartController