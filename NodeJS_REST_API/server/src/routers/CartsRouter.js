import { Router } from 'express'
import { authorize } from '../middlewares/jwt.js'
import CartsControllers from '../controllers/CartsControllers.js'

export default class CartsRouter {
    #cartsRouter

    /**
    * @param {CartsControllers} cartsControllers
    */
    constructor(cartsControllers) {
        this.#cartsRouter = Router()
            .get('/', authorize, (req, res, next) => cartsControllers.getProducts(req, res, next))
            .post('/', authorize, (req, res, next) => cartsControllers.saveProductInCart(req, res, next))
            .delete('/:id?', authorize, (req, res, next) => cartsControllers.removeProductFromCart(req, res, next))
    }

    get() { return this.#cartsRouter }
}