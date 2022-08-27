import passport from 'passport'
import { winston } from '../loggerControllers.js'

export const registerController = (req, res) => {
    passport.authenticate('local-register', async (error, user, options) => {
        if (user) {
            await req.logIn(user, async () => {
                const session = req.session
                session.name = req.body.username
                return await res.json(user)
            })
        } else if (options) {
            return res.json(options)
        } else {
            winston.log('info', `apiRegisterController --> registered ok`)
            return res.status(204).send('')
        }
    })(req, res)
}