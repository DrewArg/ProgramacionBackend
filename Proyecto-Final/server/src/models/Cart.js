import Id from './Id.js';
export default class Cart {
    #id
    #products

    constructor() {
        this.#id = new Id().getNewId()
        this.#products = []
    }

    //TODO ver si esto va acá o en la base de datos
    //TODO ver si hace falta agregar un ListadoDeProductos como mostró marian

    /**
    * @param {string} productId
    * @param {number} quantity
   */
    addProduct(productId, quantity) {
        if (!productId) throw new Error(`The productId is required`)

        const existIndex = this.#productExist(productId)
        if (!existIndex) {
            if (!quantity) throw new Error(`The quantity is required`)
            const product = {
                id: productId,
                quantity: quantity
            }
            this.#products.push(product)
        } else {
            this.#products[existIndex].quantity += quantity
        }
    }

    /**
   * @param {string} productId
  */
    removeOneProduct(productId) {
        const existIndex = this.#productExist(productId)
        if (!existIndex) {
            throw new Error(`The productId ${productId} does not exist`)
        } else {
            if (this.#products[existIndex].quantity === 1) {
                this.#products.splice(existIndex, 1)[0];
            } else {
                this.#products[existIndex].quantity -= 1
            }
        }
    }

    /**
   * @param {string} productId
  */
    removeWholeProduct(productId) {
        const existIndex = this.#productExist(productId)
        if (!existIndex) {
            throw new Error(`The productId ${productId} does not exist`)
        } else {
            this.#products.splice(existIndex, 1)[0];
        }
    }


    emptyCart() {
        this.#products = []
    }

    /**
     * @param {string} productId
     */
    #productExist(productId) {
        if (!productId) throw new Error(`The productId is required`)
        const index = this.#products.findIndex((p) => p.id == productId)
        if (index == -1) {
            return false
        } else {
            return index;
        }

    }

    getId() { return this.#id }
    getProducts() { return this.#products }

    getCartData() {
        return JSON.parse(JSON.stringify(Object.freeze({
            id: this.#id,
            products: this.#products
        })))
    }
}