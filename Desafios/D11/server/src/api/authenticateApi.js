import { userController } from '../controllers/userControllers.js'
import bcrypt from 'bcryptjs'

//de aca sale ok verificado
export const autenticar = async (username, password) => {
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
                }
            }

        })
    } catch (error) {
        console.error(`Auth Api --> ${error}`);
    }
    return user;

}