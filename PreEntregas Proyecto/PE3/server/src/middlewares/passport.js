import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";

import { userController } from '../controllers/userControllers.js'
import { registeruser } from '../api/userApi.js'
import { autenticar } from '../api/authenticate.js'

passport.use('local-strategy', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
},

    async (req, username, password, done) => {
        try {
            const usr = {
                username: username,
                password: password
            }

            const userId = await registeruser(usr)
            const user = await userController.getById(userId)

            done(null, user)
        } catch (error) {
            console.log(`Passport --> ${error}`);
            done(error)
        }
    }))

passport.use('local-login', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
},

    async (_, username, password, done) => {
        const user = await autenticar(username, password)
        if (!user) {
            return done(null, false)
        } else {
            return done(null, user)
        }
    }
))

export const passporMiddleware = passport.initialize()

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