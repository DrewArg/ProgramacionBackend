import { saveUser } from '../controllers/userControllers.js'
export const registerUser = async (usr) => {
    try {
        console.log(usr);
        const user = await saveUser(usr)
        console.log(user);
        if (user) {
            return user
        } else {
            console.log("UserApi --> no se pudo registrar");
            return user
        }
    } catch (error) {
        console.error("UserApi --> " + error);
    }



}