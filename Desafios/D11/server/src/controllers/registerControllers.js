import passport from 'passport'

export function registerController(req, res) {
    passport.authenticate('local-register', async (error, user, options) => {
        if (user) {
            await req.logIn(user, async () => {
                return await res.status(200).json(user)
            })
        } else if (options) {
            return res.json(options)
        }
    })(req, res)
}

