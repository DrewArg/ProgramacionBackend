import passport from 'passport'

import { productsDao, mockProductsDao } from "../daos/daoIndex.js";

export const loginController = passport.authenticate('login', {
    successRedirect: '/auth/successLogin',
    failureRedirect: '/auth/failLogin',
})

export function successLoginController(req, res) {
    res.json({ msg: 'ok' })
}

export function failLoginController(req, res) {
    res.status(401).json({ err: 'fallo el login' })
}


export function logoutController(req, res) {
    if (req.isAuthenticated()) {
        req.logout()
    }
    res.sendStatus(200)
} 