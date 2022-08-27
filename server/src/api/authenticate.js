import { userController } from "../controllers/userControllers.js";
import bcrypt from 'bcryptjs'
import { winston } from "../controllers/loggerControllers.js";

export const autenticar = async (username, password) => {
    try {
        const user = await userController.getByUsername(username)
        const isAllowed = bcrypt.compareSync(password, user.password)

        if (!isAllowed) {
            winston.log('warn',`Authenticate --> las contraseñas no coinciden`)
            return null
        } else {
            winston.log('info',`Authenticate --> autenticado`)
            return user
        }
    } catch (error) {
        winston.log('error',`Authenticate --> ${error}`)

    }
}