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
    }
}