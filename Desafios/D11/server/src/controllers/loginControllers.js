import passport from 'passport'
import { sessionsDao } from '../daos/daoIndex.js'

export function isLoggedIn(req, res) {
    if (req.session.passport) {
        return true
    } else {
        return false
    }

}

export function loginController(req, res) {
    passport.authenticate("local-login", async (error, user, options) => {
        if (user) {
            await req.logIn(user, async () => {
                return await res.json(user)
            })
        } else if (options) {
            return res.json(options)
        } else {
            return res.status(204).send('')
        }
    })(req, res)
}

export async function logoutController(req, res) {
    if (isLoggedIn(req, res)) {
        await req.session.destroy()
        await req.logout()
        sessionsDao.deleteAll()
        return res.send('')
    }
} 