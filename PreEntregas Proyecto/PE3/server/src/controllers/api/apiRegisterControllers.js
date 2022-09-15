import passport from 'passport'
import { winston } from '../loggerControllers.js'

export const registerController = (req, res) => {
    passport.authenticate('local-register', async (error, user, options) => {
        if (user) {
            console.log("******register controller******");
            console.log("-------user-------");
            console.log(user);
            console.log("---------------");
            await req.logIn(user, async () => {
                const session = req.session
                session.name = req.body.username
                console.log("-------session-------");
                console.log(session);
                console.log("---------------");
                console.log("-------session name-------");
                console.log(session.name);
                console.log("---------------");
                return await res.json(user)
                // return await res.json(session)
            })
        } else if (options) {
            console.log("register controller options --> " + options);

            return res.json(options)
        } else {
            console.log("register controller other --> ");

            winston.log('info', `apiRegisterController --> registered ok`)
            return res.status(204).send('')
        }
    })(req, res)
}