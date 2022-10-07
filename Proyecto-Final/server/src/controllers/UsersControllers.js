import UsersService from '../service/UsersService.js'

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

    saveUser = async (req, res, next) => {
        try {
            const savedUser = await this.#usersService.saveUser(req.body)
            res.status(201).json(savedUser)
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