import { winston } from '../controllers/loggersControllers.js';
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
        if (!name){
            winston.error('product --> el name es requerido')
            throw new Error('MISSING_REQUIRED_PARAM')
        } 
            
        this.#name = name
    }

    /**
     * @param {string} description
     */
    set description(description) {
        if (!description){
            winston.error('product --> la description es requerida')
            throw new Error('MISSING_REQUIRED_PARAM')
        } 
        this.#description = description
    }

    /**
     * @param {number}price
     */
    set price(price) {
        if (!price){
            winston.error('product --> el price es requerido')
            throw new Error('MISSING_REQUIRED_PARAM')
        } 
        this.#price = price
    }

    /**
     * @param {string} image
     */
    set image(image) {
        if (!image){
            winston.error('product --> la url de imagen es requerida')
            throw new Error('MISSING_REQUIRED_PARAM')
        } 
            
        this.#image = image
    }

    getId() { return this.#id }
    getName() { return this.#name }
    getDescription() { return this.#description }
    getPrice() { return this.#price }
    getImage() { return this.#image }

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