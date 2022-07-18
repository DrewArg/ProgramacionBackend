import passport from 'passport'
import { Strategy } from 'passport-local'

import { userController } from '../controllers/userControllers.js'

import { registerUser } from '../api/userApi.js'
import { authenticate } from '../api/authenticateApi.js'

passport.use('register', new Strategy({
    passReqToCallback: true,
},
    async (req, username, password, done) => {
        try {
            const usr = {
                username: username,
                password: password
            }
            const user = await registerUser(usr)
            done(null, user)
        } catch (error) {
            console.error("Passport --> ");
            done(error)

        }
    }))

passport.use('login', new Strategy(
    async (username, password, done) => {
        try {
            const user = await authenticate(username, password)
            done(null, user)
        } catch (error) {
            done(null, false)
        }
    }))

export const passportMiddleware = passport.initialize()

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    try {
        const user = userController.getById(id)
        done(null, user)
    } catch (error) {
        done(error)
    }
})

export const passportSessionHandler = passport.session()
