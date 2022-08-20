import passport from 'passport'

export const registerController = (req, res) => {
    passport.authenticate('local-register', async (error, user, options) => {
        if (user) {
            await req.logIn(user, async () => {
                const session = req.session
                session.name = req.body.username
                return await res.json(user)
            })
        } else if (options) {
            console.log('options');
            return res.json(options)
        } else {
            console.log("else " + user);
            return res.status(204).send('')
        }
    })(req, res)
}