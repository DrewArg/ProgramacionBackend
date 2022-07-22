import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'

import { userController } from '../controllers/userControllers.js'

import { registerUser } from '../api/userApi.js'
import { autenticar } from '../api/authenticateApi.js'

passport.use('local-register', new LocalStrategy({
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

passport.use('login', new LocalStrategy(
    async (username, password, done) => {
        try {
            const user = await autenticar(username, password)
            done(null, user)
        } catch (error) {
            done(null, false)
        }
    }))

passport.use('local-login', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async (_, username, password, done) => {
    const user = await autenticar(username, password)
    if (!user) {
        return done(null, false)
    } else {
        return done(null, user)
    }

}
))

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
