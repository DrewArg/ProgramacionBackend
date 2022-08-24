import { userController } from "../userControllers.js";

export const apiUserController = {
    async getUserId(req, res) {
        try {
            if (req.session.passport) {
                res.status(200).json(req.session.passport.user)
            } else {
                res.json("usuario no ingresado")
            }

        } catch (error) {
            console.log(`User controller --> ${error}`);
        }
    },

    async isAdmin(req, res) {
        if (req.session.passport) {
            const user = await userController.getById(req.session.passport.user)
            const username = user.username
            const userPass = user.password
            if (process.env.ADMIN === username) {
                if (process.env.HASHPASS === userPass) {
                    res.send(true)
                } else {
                    res.send(false)
                }
            } else {
                res.send(false)
            }
        } else {
            res.send(false)
        }


    },
    async getUserInfo(req, res) {
        if (req.user) {
            const reqUser = await req.user
            const username = reqUser.username
            const user = await userController.getByUsername(username)
            if (user) {
                res.json(user)
            } else {
                res.json(" ")
            }
        }
        else {
            res.json(" ")
        }
    },

    async updateUserInfo(req, res) {
        const file = req.file
        console.log(file);
       
        if (req.session.passport) {
            console.log(req.body.avatar);
            const userId = await req.session.passport.user
            const updFullname = req.body.fullName
            const updAddress = req.body.address
            const updAge = req.body.age
            const updPhone = req.body.phone
            const updAvatar = req.body.avatar

            const user = await userController.getById(userId)

            if (user) {
                user.fullName = updFullname
                user.address = updAddress
                user.age = updAge
                user.phone = updPhone
                user.avatar = updAvatar
                userController.updateUser(user)
            }
        } else {
            res.json("usuario no ingresado")
        }

    }
}