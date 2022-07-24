import passport from 'passport'

export const loginController = passport.authenticate('login', {
    successRedirect: '/auth/successLogin',
    failureRedirect: '/auth/failLogin'
})

export function logoutController(req, res) {
    if (req.isAuthenticated()) {
        req.logout()
    }
    res.sendStatus(200)
} 