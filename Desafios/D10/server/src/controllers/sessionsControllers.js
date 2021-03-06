import { sessionsDao } from "../daos/daoIndex.js";

const sessionController = {
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
            console.error("Session controller --> no se pudo verificar el logueo. " + error);

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
            console.error("Session controller --> no se pudo crear la sesión. " + error);
        }
    },

    async logout(req, res) {
        try {
            await req.session.destroy()
            sessionsDao.deleteAll()
            res.send('')
        } catch (e) {
            console.error(
                "Session controller --> No se pudo borrar la sesión. " + e
            );
        }
    },
}

export default sessionController