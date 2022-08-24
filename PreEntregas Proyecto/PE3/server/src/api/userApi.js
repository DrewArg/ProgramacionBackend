import { userController } from '../controllers/userControllers.js'
import { cartController } from '../controllers/cartControllers.js'

export const registerUser = async (usr) => {
    try {
        const userId = await userController.saveUser(usr)
        const cart = {
            userId: userId.toString(),
            products:[]
        }
        await cartController.saveCart(cart)

        if (userId) {
            return userId
        } else {
            console.log(`UserApi --> no se pudo registrar`);
        }
    } catch (error) {
        console.error(`UserApi --> ${error}`);
    }
}