import { userController } from "../controllers/userControllers.js";
import bcrypt from 'bcryptjs'

export const autenticar = async (username, password) => {
    try {
        const user = await userController.getByUsername(username)
        const isAllowed = bcrypt.compareSync(password, user.password)

        if (!isAllowed) {
            console.log(`Las contraseñas no coinciden`);
            return null
        } else {
            return user
        }
    } catch (error) {
        console.error(`Authenticate --> ${error}`);
    }
}