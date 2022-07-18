import passport from 'passport'

export const registerController = passport.authenticate('register', {
    successRedirect: '/auth/successRegister',
    failureRedirect: '/auth/failRegister',
})

export function successRegisterController(req, res) {
    // decirle al socket controller que mande un login de ok  al cliente
}

export function failRegisterController(req, res) {
    // decirle al socket controller que mande un login de error  al cliente
    res.status(400).json({ err: 'fallo el registro' })
}