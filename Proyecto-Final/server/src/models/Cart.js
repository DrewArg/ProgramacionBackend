import { v4 as uuidv4 } from 'uuid';
export class Cart {
    #id
    #products

    constructor() {
        this.#id = uuidv4()
        this.#products = []
    }

    //TODO ver si esto va acá o en la base de datos
    addProduct(product) {
        if (!product) throw new Error(`The product is required`)
        this.#products.push(product)
    }

    removeProduct(product) {
        if (!product) throw new Error(`The product is required`)

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