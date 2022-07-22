import passport from 'passport'

export function loginController(req, res) {
    console.log(req.body);
    passport.authenticate("local-login", async (error, user, options) => {
        if (user) {
            await req.logIn(user, async () => {
                return await res.status(200).json(user)
            })
        } else if (options) {
            return res.json(options)
        }
    })(req, res)
}

export function logoutController(req, res) {
    if (req.isAuthenticated()) {
        req.logout()
    }
    res.sendStatus(200)
} 