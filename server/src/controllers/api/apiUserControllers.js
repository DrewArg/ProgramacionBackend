import { userController } from "../userControllers.js";
import { adminAccount, adminHash } from '../../config/config.js'
import { winston } from "../loggerControllers.js";

export const apiUserController = {
    async getUserId(req, res) {
        try {
            if (req.session.passport) {
                winston.log('info', `apiUserController --> passport loggeado, devolviendo user id`)
                res.status(200).json(req.session.passport.user)

            } else {
                winston.log('warn', `apiUserController --> passport NO loggeado`)
                res.json("usuario no ingresado")
            }

        } catch (error) {
            winston.log('error', `apiUserController -->  ${error}`)
        }
    },

    async isAdmin(req, res) {
        if (req.session.passport) {
            try {
                const user = await userController.getById(req.session.passport.user)
                const username = user.username
                const userPass = user.password
                if (adminAccount === username) {
                    if (adminHash === userPass) {
                        res.send(true)
                    } else {
                        winston.log('info', `apiUserController -->  el usuario NO es admin`)
                        res.send(false)
                    }
                } else {
                    winston.log('info', `apiUserController -->  el usuario NO es admin`)
                    res.send(false)
                }
            } catch (error) {
                winston.log('error', `apiUserController -->  ${error}`)
            }
        } else {
            winston.log('warn', `apiUserController -->  passport NO loggeado`)
            res.send(false)
        }


    },
    async getUserInfo(req, res) {
        if (req.user) {
            try {
                const reqUser = await req.user
                const username = reqUser.username
                const user = await userController.getByUsername(username)
                if (user) {
                    res.json(user)
                } else {
                    winston.log('warn', `apiUserController -->  no se encontró el usuario`)
                    res.json(" ")
                }
            } catch (error) {
                winston.log('error', `apiUserController -->  ${error}`)

            }

        }
        else {
            winston.log('warn', `apiUserController -->  no se encontró usuario en la petición`)
            res.json(" ")
        }
    },

    async updateUserInfo(req, res) {

        if (req.session.passport) {

            try {
                const userId = await req.session.passport.user
                const updFullname = req.body.fullName
                const updAddress = req.body.address
                const updAge = req.body.age
                const updPhone = req.body.phone
                const user = await userController.getById(userId)

                if (user) {
                    user.fullName = updFullname
                    user.address = updAddress
                    user.age = updAge
                    user.phone = updPhone
                    await userController.updateUser(user)
                }
            } catch (error) {
                winston.log('error', `apiUserController -->  ${error}`)

            }

        } else {
            winston.log('warn', `apiUserController -->  usuario no ingresado`)

            res.json("usuario no ingresado")
        }

    },

    async updateProfileImage(req, res) {
        try {
            const url = req.protocol + '://' + req.get('host')
            const profileImgPath = url + '/' + req.file.path
            const profileImgData = req.file
            const username = req.body.username
            const user = await userController.getByUsername(username)

            if (user) {
                user.profileImg = {
                    profileImgPath: profileImgPath,
                    profileImgData: profileImgData
                }
                await userController.updateUser(user)

            } else {
                res.json("hubo un error")
            }

        } catch (error) {
            winston.log('error', `apiUserController -->  ${error}`)

        }


    }
}