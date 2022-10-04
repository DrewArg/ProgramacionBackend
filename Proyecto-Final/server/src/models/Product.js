import Id from './Id';

export class Product {
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
    constructor({ name, description, price, imageUrl }) {
        this.name(name)
        this.description(description)
        this.price(price)
        this.image(imageUrl)
        this.#id = new Id()
    }

    /**
     * @param {string} name
     */
    set name(name) {
        if (!name) throw new Error(`The name value is required`)
        if (typeof name !== 'string') throw new Error(`The datatype of name must be a string`)
        this.#name = name
    }

    /**
     * @param {string} description
     */
    set description(description) {
        if (!description) throw new Error(`The description value is required`)
        if (typeof description !== 'string') throw new Error(`The datatype of description must be a string`)
        this.#description = description
    }

    /**
     * @param {number}price
     */
    set price(price) {
        if (!price) throw new Error(`The price value is required`)
        if (typeof price !== 'number') throw new Error(`The datatype of price must be a number`)
        this.#price = price
    }

    /**
     * @param {string} image
     */
    set image(image) {
        if (!image) throw new Error(`The image value is required`)
        if (typeof image !== 'string') throw new Error(`The datatype of image must be a number`)
        this.#image = image
    }

    get id() { return this.#id }
    get name() { return this.#name }
    get description() { return this.#description }
    get price() { return this.#price }
    get image() { return this.#image }

    getProductData() {
        return Object.freeze({
            id: this.#id,
            name: this.#name,
            description: this.#description,
            price: this.#price,
            image: this.#image

        })
    }
}