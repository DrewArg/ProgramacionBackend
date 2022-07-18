import passport from 'passport'
import socketController from './socketControllers.js'

export const loginController = passport.authenticate('login', {
    successRedirect: '/auth/successLogin',
    failureRedirect: '/auth/failLogin'
})

// CON REACT ESTO NO ES NECESARIO
// export function successLoginController(req, res) {
//     // decirle al socket controller que mande un login de ok  al cliente
//     console.log("hola");
//     console.log(req.body);
//     socketController.sendData(req.body.username)
//     res.json({ msg: 'ok' })
// }

// export function failLoginController(req, res) {
//     // decirle al socket controller que mande un login de error  al cliente
//     res.status(401).json({ err: 'fallo el login' })
// }


export function logoutController(req, res) {
    if (req.isAuthenticated()) {
        req.logout()
    }
    res.sendStatus(200)
} 