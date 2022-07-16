import passport from 'passport'
import { Strategy } from 'passport-local'

import { userController } from '../controllers/userControllers.js'

import { registerUser } from '../api/userApi.js'
import { authenticate } from '../api/authenticateApi.js'

passport.use('register', new Strategy({
    passReqToCallback: true,
    // usernameField: 'email',
    // passwordField: 'contrasenia',
},
    (req, username, password, done) => {
        try {
            const userData = req.body
            const user = registerUser(req.body)
            done(null, user)
        } catch (error) {
            done(error)

        }
    }))

passport.use('login', new Strategy(
    (username, password, done) => {
        try {
            const user = authenticate(username, password)
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
