import { v4 as uuidv4 } from 'uuid';
import { Cart } from './Cart';

export class User {
    #id
    #email
    #password
    #name
    #lastname
    #phone
    #image
    #cart

    /**
    * @param {string} email
    * @param {string} password
    */
    constructor({ email, password }) {
        this.#setEmail(email)
        this.#setPassword(password)
        this.#id = uuidv4()
        this.#cart = new Cart()
    }

    #setEmail(email) {
        if (!email) throw new Error(`The email value is required`)
        if (typeof email !== 'string') throw new Error(`The datatype of email must be a string`)
        this.#email = email
    }

    #setPassword(password) {
        if (!password) throw new Error(`The password value is required`)
        if (typeof password !== 'string') throw new Error(`The datatype of password must be a string`)
        this.#password = password
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
     * @param {string} lastname
     */
    set lastname(lastname) {
        if (!lastname) throw new Error(`The lastname value is required`)
        if (typeof lastname !== 'string') throw new Error(`The datatype of lastname must be a string`)
        this.#lastname = lastname
    }

    /**
     * @param {number} phone
     */
    set phone(phone) {
        if (!phone) throw new Error(`The phone value is required`)
        if (typeof phone !== 'number') throw new Error(`The datatype of phone must be a number`)
        this.#phone = phone
    }

    /**
     * @param {string} image
     */
    set image(image) {
        if (!image) throw new Error(`The image value is required`)
        if (typeof image !== 'string') throw new Error(`The datatype of image must be a string`)
        this.#image = image
    }

    get id() { return this.#id }
    get email() { return this.#email }
    get password() { return this.#password }
    get name() { return this.#name }
    get lastname() { return this.#lastname }
    get phone() { return this.#phone }
    get image() { return this.#image }
    get cart() { return this.#cart }


    getUserData() {
        return Object.freeze({
            id: this.#id,
            email: this.#email,
            password: this.#password,
            name: this.#name,
            lastname: this.#lastname,
            phone: this.#phone,
            image: this.#image,
            cart: this.#cart
        })
    }







}