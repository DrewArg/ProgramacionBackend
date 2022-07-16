import { userController } from '../controllers/userControllers.js'

export const authenticate = (username, password) => {
    let user;
    try {
        user = userController.getByUsername(username)
        if (user.password !== password) {
            user = null
            console.log(`Las contraseñas no coinciden`);
        }
    } catch (error) {
        console.error(`Auth Api --> ${error}`);
    }

    return user;

}