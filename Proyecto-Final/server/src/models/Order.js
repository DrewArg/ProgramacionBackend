import { v4 as uuidv4 } from 'uuid';

export class Order {
    #id
    #products

    constructor(cart) {
        this.#setProducts(cart)
        this.#id = uuidv4()
    }

    #setProducts(cart) {
        const products = cart.products
        if (!products) throw new Error(`The products are required`)
        this.#products = products
        cart.products = []
    }

    get id() { return this.#id }
    get products() { return this.#products }

    getOrderData() {
        return Object.freeze({
            id: this.#id,
            products: this.#products
        })
    }
}