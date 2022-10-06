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
        if (!name) throw new Error('MISSING_REQUIRED_PARAM')
        this.#name = name
    }

    /**
     * @param {string} description
     */
    set description(description) {
        if (!description) throw new Error('MISSING_REQUIRED_PARAM')
        this.#description = description
    }

    /**
     * @param {number}price
     */
    set price(price) {
        if (!price) throw new Error('MISSING_REQUIRED_PARAM')
        this.#price = price
    }

    /**
     * @param {string} image
     */
    set image(image) {
        if (!image) throw new Error('MISSING_REQUIRED_PARAM')
        this.#image = image
    }

    get id() { return this.#id }
    get name() { return this.#name }
    get description() { return this.#description }
    get price() { return this.#price }
    get image() { return this.#image }

    getProductData() {
        return JSON.parse(JSON.stringify(Object.freeze(({
            id: this.#id,
            name: this.#name,
            description: this.#description,
            price: this.#price,
            image: this.#image
        }))))
    }
}