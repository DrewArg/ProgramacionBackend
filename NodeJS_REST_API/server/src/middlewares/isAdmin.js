import { winston } from "../controllers/loggersControllers.js";
import { ADMIN_EMAIL } from "../config/config.js";

export function isAdmin(req, res, next) {
    if (req.user.email === ADMIN_EMAIL) {
        next()
    } else {
        winston.error("isAdmin --> el usuario no es admin")
        throw new Error("FORBIDDEN")
    }
}