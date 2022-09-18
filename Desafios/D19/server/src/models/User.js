import { v4 as uuidv4 } from 'uuid';

export default class User {
    #id
    #username
    #password
    constructor(id = uuidv4(), { username, password }) {
        this.#id = id
        this.#username = username
        this.#password = password
    }

    set username(username) {
        if (!username) throw new Error(`MISSING_ARGS: el campo 'id' es obligatorio`)
        this.#username = username
    }
    set password(password) {
        if (!password) throw new Error(`MISSING_ARGS: el campo 'id' es obligatorio`)
        this.#password = password
    }

    userData() {
        return Object.freeze({
            id: this.#id,
            username: this.#username,
            password: this.#password
        })
    }
}

