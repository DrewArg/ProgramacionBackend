import { userController } from '../controllers/userControllers.js'

export const registerUser = async (usr) => {
    try {
        const user = await userController.saveUser(usr)
        if (user) {
            return user
        } else {
            console.log("userApi no se pudo registrar ");
        }
    } catch (error) {
        console.error("UserApi --> " + error);
    }



}