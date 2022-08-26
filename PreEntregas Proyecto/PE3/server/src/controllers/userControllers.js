import bcrypt from 'bcryptjs'
import { sendNewRegisterEthereal } from '../messaging/mail/nodeMailer.js'
import { usersDao } from '../daos/daoIndex.js'

export const userController = {

    async getUsers() {
        try {
            const users = await usersDao.listAll()
            return users
        } catch (error) {
            console.log(`User controller --> ${error}`);
        }
    },

    async saveUser(user) {
        try {
            const doesntExist = await this.isUniqueUsername(user.username)
            if (doesntExist) {
                const hashPass = await bcrypt.hash(user.password, 10)
                const usr = {
                    username: user.username,
                    password: hashPass,
                    fullName: user.fullName,
                    phoneNumber: user.phoneNumber,
                    profileImg: {
                        profileImgPath: process.env.SEVER_URL + "/public/images/default-user.png"
                    }
                }
                const userId = await usersDao.saveObject(usr)
                await sendNewRegisterEthereal(usr)
                return userId;
            } else {
                console.log(`El usuario ya existe en el sistema`);
            }

        } catch (error) {
            console.error(`User controller --> ${error}`);
        }
    },

    async getById(id) {
        try {
            const usr = await usersDao.listById(id)
            return usr
        } catch (error) {
            console.error(`User controller --> ${error}`);
        }
    },

    async getByUsername(username) {
        try {
            const users = await this.getUsers()
            const user = users.find(u => u.username === username)
            return user
        } catch (error) {
            console.error(`User controller --> ${error}`);
        }
    },

    async isUniqueUsername(username) {
        try {
            const users = await this.getUsers()
            const user = users.find(u => u.username === username)
            if (user) {
                return false
            } else {
                return true
            }
        } catch (error) {
            console.error(`User controller --> ${error}`);
        }
    },

    async updateUser(user) {
        try {
            const usr = await usersDao.updateObject(user)
            return usr
        } catch (error) {
            console.error(`User controller --> ${error}`);
        }
    },

    async deleteById(id) {
        try {
            await usersDao.deleteById(id)
            //TODO retornar un mensaje de ok capaz con un codigo de estado
        } catch (error) {
            console.error(`User controller --> ${error}`);
        }
    },

}