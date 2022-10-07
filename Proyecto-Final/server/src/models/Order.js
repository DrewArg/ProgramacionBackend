import Id from './Id.js';

export default class Order {
    #id
    #products
    #timestamp

    /**
    * @param {Cart} cart
    */
    constructor(cart) {
        this.#setProducts(cart)
        this.#id = new Id().getNewId()
        this.#timestamp = new Date()
    }

    #setProducts(cart) {
        const products = cart.products
        if (!products) throw new Error(`The products are required`)
        this.#products = products
        cart.emptyCart()
    }

    getId() { return this.#id }
    getProducts() { return this.#products }
    getTimestamp() { return this.#timestamp }

    getOrderData() {
        return JSON.parse(JSON.stringify(Object.freeze({
            id: this.#id,
            products: this.#products,
            timestamp: this.#timestamp
        })))
    }
}