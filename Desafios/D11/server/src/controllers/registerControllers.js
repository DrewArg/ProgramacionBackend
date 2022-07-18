import passport from 'passport'

export const registerController = passport.authenticate('register', {
    successRedirect: '/auth/successRegister',
    failureRedirect: '/auth/failRegister',
})

export function successRegisterController(req, res) {
    console.log(req.user)
    // res.sendFile('registroOk.html', { root: './views' })
}

export function failRegisterController(req, res) {
    res.status(400).json({ err: 'fallo el registro' })
}