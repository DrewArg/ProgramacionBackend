import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'

import { getUser } from '../controllers/userControllers.js'

import { registerUser } from '../api/userApi.js'
import { autenticar } from '../api/authenticateApi.js'

passport.use('local-register', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true,
},
    async (req, username, password, done) => {
        try {
            const usr = {
                username: username,
                password: password
            }
            const user = await registerUser(usr)
            const u = await getUser(user)
            done(null, u)
        } catch (error) {
            console.error("Passport --> ");
            done(error)

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
        const user = getUser(id)
        done(null, user)
    } catch (error) {
        done(error)
    }
})

export const passportSessionHandler = passport.session()
