import { sessionsDao } from "../daos/daoIndex.js";
import { userController } from "./userControllers.js";

const authControllers = {
    async isLogged(req, res) {
        try {
            if (req.session) {
                const logged = await sessionsDao.listAll()
                if (logged.length > 0) {
                    const cookie = (JSON.parse(logged[0].session))
                    res.send(cookie.name)

                } else {
                    res.send('')

                }
            }
        } catch (error) {
            console.error("Session controller -->  " + error);

        }
    },

    async login(req, res) {
        try {
            const session = req.session;
            session.name = req.body.name
            session.isLoggedIn = true;
            // session.id = req.sessionID
            await session.save()
            res.send(session.name)
        } catch (error) {
            console.error("Session controller -->  " + error);
        }
    },

    async logout(req, res) {
        try {
            await req.session.destroy()
            sessionsDao.deleteAll()
            res.send('')
        } catch (e) {
            console.error(
                "Session controller -->  " + e
            );
        }
    },

    async register(req, res) {
        const user = {
            username: req.body.username,
            password: req.body.password
        }
        userController.saveUser(user)
    }
}

export default authControllers