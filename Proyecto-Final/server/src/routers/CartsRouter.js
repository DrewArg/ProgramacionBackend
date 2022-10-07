import { Router } from 'express'
import CartsControllers from '../controllers/CartsControllers.js'

//TODO agregar middleware que controle si el usuario está registrado y logeado antes de mostrar el carrito

export default class CartsRouter {
    #cartsRouter

    /**
    * @param {CartsControllers} cartsControllers
    */
    constructor(cartsControllers) {
        this.#cartsRouter = Router()
            .get('/', (req, res, next) => cartsControllers.getProducts(req, res, next))
            .post('/', (req, res, next) => cartsControllers.saveProductInCart(req, res, next))
            .delete('/:id?', (req, res, next) => cartsControllers.removeProductFromCart(req, res, next))
        //TODO VER SI LA LINEA DE ABAJO VA ACA O EN EL APIROUTER
        // .all('/*', () => { throw new Error('') })
    }

    get() { return this.#cartsRouter }
}