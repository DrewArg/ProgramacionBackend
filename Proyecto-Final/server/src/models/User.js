export class User {
    #id
    #email
    #password
    #name
    #lastname
    #phone
    #image

    constructor({ email, password }) {
        this.#setEmail(email)
        this.#setPassword(password)
    }

    #setEmail(email) {
        if (!email) throw new Error(`The email value is required`)
        if (typeof email !== 'string') throw new Error(`The datatype of email must be a string`)
        this.#email = email
    }

    #setPassword(password) {
        if (!password) throw new Error(`The password is required`)
        if (typeof password !== 'string') throw new Error(`The datatype of password must be a string`)
    }

    
}