import { sessionsDao } from "../daos/daoIndex.js";

const sessionController = {
    async save(session) {
        try {
            sessionsDao.saveObject(session)
        } catch (error) {
            console.error("Session controller --> no se pudo guardar la sesión. " + error);
        }
    },

    async getByName(name) {
        try {
            return sessionsDao.listByName(name)
        } catch (error) {
            console.error("Session controller --> no se pudo encontrar por nombre. " + error);
        }
    },

    async delete(session) {
        try {
            await sessionsDao.deleteById(session.id);
            return { ok: "Session controller --> producto eliminado correctamente" };
        } catch (e) {
            console.error(
                "Session controller --> No se pudo borrar la sesión. " + e
            );
        }
    },
}

export default sessionController