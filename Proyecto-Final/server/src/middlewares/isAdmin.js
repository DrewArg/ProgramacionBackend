import { ADMIN_EMAIL } from "../config/config.js";

export function isAdmin(req, res, next) {
    if (req.user.email === ADMIN_EMAIL) {
        next()
    } else {
        throw new Error('FORBIDDEN')
    }
}