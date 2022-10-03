import { v4 as uuidv4 } from 'uuid';
export class Cart {
    #id
    #products

    constructor() {
        this.#id = uuidv4()
        this.#products = []
    }

    get id() { return this.#id }
    get products() { return this.#products }

    getCartData() {
        return Object.freeze({
            id: this.#id,
            products: this.#products
        })
    }
}