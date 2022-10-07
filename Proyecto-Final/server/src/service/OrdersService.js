import Order from '../models/Order.js'

export default class OrdersService {
    #ordersDao

    /**
    * @param {dao} ordersDao
    */
    constructor(ordersDao) {
        this.#ordersDao = ordersDao
    }

    async getById(id) {
        return await this.#ordersDao.listById(id)
    }

    async getAll() {
        return await this.#ordersDao.listAll()
    }

    async saveOrder(cart) {
        const order = new Order(cart)
        return await this.#ordersDao.saveObject(order.getOrderData())
    }

    async updateOrder(orderId, orderData) {
        const updated = await this.#ordersDao.updateObject(orderId, JSON.parse(JSON.stringify(orderData)))

        return updated
    }

    async deleteOrder(orderId) {
        await this.#ordersDao.deleteById(orderId)
    }
}