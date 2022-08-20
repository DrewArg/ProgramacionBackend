import passport from "passport";
import { sessionsDao } from "../daos/daoIndex.js";

export const isLoggedIn = (req, res) => {
    if (req.session.passport) {
        return true
    } else {
        return false
    }
}

export const loginController = (req, res) => {
    passport.authenticate('local-login', async (error, user, options) => {
        if (user) {
            await req.logIn(user, async () => {
                return await res.json(user)
            })
        } else if (options) {
            return res.json(options)
        } else {
            return res.status(204).send('')
        }
    })
}

export const logoutController = async (req, res) => {
    if (isLoggedIn(req, res)) {
        await req.session.destroy()
        await req.logout()
        //TODO ver que onda esta linea de abajo que aparece como descomentada siempre
        // sessionsDao.deleteAll()
        return res.send('')
    }
}