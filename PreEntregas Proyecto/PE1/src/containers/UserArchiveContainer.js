const fs = require('fs')
const User = require('../db/User.js')

class UserArchiveContainer {
    constructor(path) {
        this.path = path
        this.users = []
    }

    _saveFile() {
        const textFile = JSON.stringify(this.users, null, 2)
        return fs.promises.writeFile(this.path, textFile)
    }

    _readFile() {
        return fs.promises.readFile(this.path, 'utf-8')
            .then((text) => {
                const usersArray = JSON.parse(text)
                this.users = usersArray
            })
    }

    _findUser(userData) {
        await this._readFile()
        const foundUser = this.users.find((u) => u.name === userData.name)
        return foundUser
    }

    async createUser(userData) {
        await this._readFile()

        if (!this._findUser(userData)) {

            const user = new User(
                userData.name,
                userData.password,
                userData.isAdmin
            )

            this.users.push(user)

            await this._saveFile()
        } else {
            return { error: "el usuario ya existe en el sistema" }
        }

    }

    async authorizeUser(userData) {
        await this._readFile();

        if (this._findUser(userData)) {
            if (userData.password === foundUser.password) {
                return true;
            } else {
                return { error: "El usuario y/o la contraseña son incorrectos" }
            }
        } else {
            return { error: "El usuario y/o la contraseña son incorrectos" }
        }
    }
}

module.exports = UserArchiveContainer