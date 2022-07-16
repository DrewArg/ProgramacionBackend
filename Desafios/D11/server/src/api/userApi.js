import { createUser } from '../models/User.js'
import { userController } from '../controllers/userControllers.js'

export const registerUser = (userData) => {
    const unique = userController.isUniqueUsername(userData.username)

    if (unique) {
        const user = createUser(userData)
        userController.saveUser(user)
        return user;
    }

}