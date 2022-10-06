import Id from './Id.js';

export default class Product {
    #id
    #name
    #description
    #price
    #image

    /**
    * @param {string} name
    * @param {string} description
    * @param {number} price
    * @param {string} imageUrl
    */
    constructor(name, description, price, imageUrl ) {
        this.name = name
        this.description = description
        this.price = price
        this.image = imageUrl
        this.#id = new Id().getNewId()
    }

    /**
     * @param {string} name
     */
    set name(name) {
        this.#name = name
    }

    /**
     * @param {string} description
     */
    set description(description) {
        this.#description = description
    }

    /**
     * @param {number}price
     */
    set price(price) {
        this.#price = price
    }

    /**
     * @param {string} image
     */
    set image(image) {
        this.#image = image
    }

    get id() { return this.#id }
    get name() { return this.#name }
    get description() { return this.#description }
    get price() { return this.#price }
    get image() { return this.#image }

    getProductData() {
        return Object.freeze(({
            id: this.#id,
            name: this.#name,
            description: this.#description,
            price: this.#price,
            image: this.#image

        }))
    }
}