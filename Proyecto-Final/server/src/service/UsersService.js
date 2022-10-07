import User from '../models/User.js'

export default class UsersService {
    #usersDao

    /**
    * @param {dao} usersDao
    */
    constructor(usersDao) {
        this.#usersDao = usersDao
    }

    async getById(id) {
        return await this.#usersDao.listById(id)
    }

    async getAllUsers() {
        return await this.#usersDao.listAll()
    }

    async saveUser({ email, password }) {
        const user = new User(email, password)
        return await this.#usersDao.saveObject(user.getUserData())
    }

    async updateUser(userId, userData) {
        const updated = await this.#usersDao.updateObject(userId, JSON.parse(JSON.stringify(userData)))
        return updated
    }

    async deleteUser(userId) {
        await this.#usersDao.deleteById(userId)
    }
}