import { Router } from "express";
import OrdersControllers from '../controllers/OrdersControllers.js'

export default class OrdersRouter {
    #ordersRouter

    /**
    * @param {OrdersControllers} ordersControllers
    */
    constructor(ordersControllers) {
        this.#ordersRouter = Router()
            .get('/', (req, res, next) => ordersControllers.getAll(req, res, next))
            .post('/', (req, res, next) => ordersControllers.saveOrder(req, res, next))

        //TODO armar un router que vaya al final de todo que mande el metodo get no autorizado
    }

    get() { return this.#ordersRouter }
}
