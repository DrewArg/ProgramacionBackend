import { userController } from '../controllers/userControllers.js'
import bcrypt from 'bcryptjs'

export const authenticate = async (username, password) => {
    let user = null;
    try {
        user = await userController.getByUsername(username)
        bcrypt.compare(password, user.password, (error, result) => {
            if (error) {
                console.log(error)
            } else {
                if (!result) {
                    user = null
                    console.log(`Las contraseñas no coinciden`);
                } else {
                    console.log("ok");
                }
            }

        })
    } catch (error) {
        console.error(`Auth Api --> ${error}`);
    }

    return user;

}