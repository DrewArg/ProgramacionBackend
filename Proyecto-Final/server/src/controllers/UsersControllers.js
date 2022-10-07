import bcrypt from 'bcryptjs'
import UsersService from '../service/UsersService.js'
import { generateAuthToken } from '../middlewares/jwt.js'

export default class UsersControllers {
    #usersService
    /**
    * @param {UsersService} usersService
    */

    constructor(usersService) {
        this.#usersService = usersService
    }

    getById = async (req, res, next) => {
        try {
            const usr = await this.#usersService.getById(req.params.id)
            res.json(id)
        } catch (error) {
            next(error)
        }
    }

    getAll = async (req, res, next) => {
        try {
            const users = await this.#usersService.getAllUsers()
            res.json(users)
        } catch (error) {
            next(error)
        }
    }

    isUniqueUsername = async (email) => {
        const users = await await this.#usersService.getAllUsers()
        const user = users.find(u => u.email === email)
        if (!user) {
            return true
        } else {
            return false
        }

    }

    saveUser = async (req, res, next) => {
        try {
            if (this.isUniqueUsername(req.body.email)) {
                req.body.password = bcrypt.hash(req.body.password, 10)
                const userId = await this.#usersService.saveUser(req.body)
                const token = generateAuthToken(req.body.email)
                res.status(201).json(token)
            }
        } catch (error) {
            next(error)
        }
    }

    updateUser = async (req, res, next) => {
        try {
            const updatedUser = await this.#usersService.updateUser(req.params.id, req.body)
            res.json(updatedUser)
        } catch (error) {
            next(error)
        }
    }

    deleteUser = async (req, res, next) => {
        try {
            const deletedUser = await this.#usersService.deleteUser(req.params.id)
            res.json(deletedUser)
        } catch (error) {
            next(error)
        }
    }
}