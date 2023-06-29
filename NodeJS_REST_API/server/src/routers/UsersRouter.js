import { Router } from 'express'
import UsersControllers from '../controllers/UsersControllers.js'

export default class UsersRouter {
    #usersRouter

    /**
     * @param {UsersControllers} usersControllers
     */
    constructor(usersControllers) {
        this.#usersRouter = Router()
            .post('/', (req, res, next) => usersControllers.saveUser(req, res, next))
    }

    get() { return this.#usersRouter }
}