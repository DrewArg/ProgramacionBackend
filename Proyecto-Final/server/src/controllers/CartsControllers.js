import CartsService from "../service/CartsService.js";
import { cartsControllers, usersControllers } from "./index.js";

export default class CartsControllers {
    #cartsService
    /**
    * @param {CartsService} cartsService
    */
    constructor(cartsService) {
        this.#cartsService = cartsService
    }

    getById = async (req, res, next) => {
        try {
            const cart = await this.#cartsService.getBydId(req.params.id)
            res.json(cart)
        } catch (error) {
            next(error)
        }
    }

    getProducts = async (req, res, next) => {
        try {
            const productsInCart = await this.#cartsService.getProducts()
            res.json(productsInCart)
        } catch (error) {
            next(error)
        }
    }

    //TODO ver si este metodo hay que usarlo o bien deberia ser save Product in cart
    saveProductInCart = async (req, res, next) => {
        try {
            //TODO DESCOMENTAR Y CODEAR REVISAR ESTO!
            const users = await usersControllers.getAll()
            const index = users.findIndex((u) => u.email === req.user.email)
            console.log(index);
            if (index != -1) {
                const cartId = users[index].getCartId()
                const userCart = await cartsControllers.getById(cartId)
                userCart.addProduct(req.body.productId, 1)
                await this.#cartsService.updateCart(cartId, { userCart })
                res.status(201).json(savedCart)
            } else {
                throw new Error('NOT_FOUND')
            }
        } catch (error) {

        }
    }

    updateCart = async (req, res, next) => {
        try {
            const updatedCart = await this.#cartsService.updateCart(req.params.id, req.body)
            res.json(updatedCart)
        } catch (error) {
            next(error)
        }
    }

    removeProductFromCart = async (req, res, next) => {
        try {
            //TODO DESCOMENTAR Y CODEAR
            // const deletedCart = await this.#cartsService.removeProductFromCart(req.params.id)
            res.json(deletedCart)
        } catch (error) {
            next(error)
        }
    }

}