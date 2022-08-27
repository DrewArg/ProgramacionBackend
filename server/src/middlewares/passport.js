import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { userController } from '../controllers/userControllers.js'
import { registerUser } from '../api/userApi.js'
import { autenticar } from '../api/authenticate.js'
import { winston } from '../controllers/loggerControllers.js'

passport.use('local-register', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
},
    async (req, username, password, done) => {
        try {
            const usr = {
                username: username,
                password: password,
                fullName: req.body.fullName,
                phoneNumber: req.body.phoneNumber
            }

            const userId = await registerUser(usr)
            const user = await userController.getById(userId)

            done(null, user)
        } catch (error) {
            winston.log('error', `Passport --> ${error}`)
            done(error)
        }
    }))

passport.use('local-login', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
},

    async (_, username, password, done) => {
        try {
            const user = await autenticar(username, password)
            if (!user) {
                return done(null, false)
            } else {
                return done(null, user)
            }
        } catch (error) {
            winston.log('error', `Passport --> ${error}`)

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