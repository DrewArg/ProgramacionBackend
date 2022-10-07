import OrdersService from '../service/OrdersService.js'

export default class OrdersControllers {
    #ordersService

    /**
     * @param {OrdersService} ordersService
    */

    constructor(ordersService) {
        this.#ordersService = ordersService
    }

    getById = async (req, res, next) => {
        try {
            const ord = await this.#ordersService.getById(req.params.id)
            res.json(ord)
        } catch (error) {
            next(error)
        }
    }

    getAll = async (req, res, next) => {
        try {
            const orders = await this.#ordersService.getAll()
            res.json(orders)
        } catch (error) {
            next(error)
        }
    }

    saveOrder = async (req, res, next) => {
        try {
            const savedOrder = await this.#ordersService.saveOrder(req.body)
            res.status(201).json(savedOrder)
        } catch (error) {
            next(error)
        }
    }

    updateOrder = async (req, res, next) => {
        try {
            const updatedOrder = await this.#ordersService.updateOrder(req.params.id, req.body)
            res.json(updatedOrder)
        } catch (error) {
            next(error)
        }
    }

    deleteOrder = async (req, res, next) => {
        try {
            const deletedOrder = await this.#ordersService.deleteOrder(req.params.id)
            res.json(deletedOrder)
        } catch (error) {
            next(errro)
        }

    }
}