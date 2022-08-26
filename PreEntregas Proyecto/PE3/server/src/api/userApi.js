import { userController } from '../controllers/userControllers.js'
import { cartController } from '../controllers/cartControllers.js'
import { winston } from '../controllers/loggerControllers.js'

export const registerUser = async (usr) => {
    try {
        const userId = await userController.saveUser(usr)
        const cart = {
            userId: userId.toString(),
            products: []
        }
        await cartController.saveCart(cart)

        if (userId) {
            winston.log('info',`userApi --> existe el Id del usuario`)
            return userId
        } else {
            winston.log('warn', `userApi --> no se pudo registrar`)
        }
    } catch (error) {
        winston.log('error', `userApi --> ${error}`)
    }
}