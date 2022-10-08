import { messagesDao } from "../database/daos/daoIndex.js";
import { winston } from "./loggersControllers.js";

export default class MessagesControllers {
  getById = async (id) => {
    try {
      const msg = await messagesDao.listById(id);
      return msg;
    } catch (error) {
      winston.error("message controller --> no se pudo obtener el mensaje");
      throw new Error("NOT_FOUND");
    }
  };

  updateMessage = async (message) => {
    try {
      const msg = await messagesDao.updateObject(message.id, message);
      return msg;
    } catch (error) {
      winston.error("no se pudo actualizar el mensaje. " + error);
      throw new Error("BAD_REQUEST");
    }
  };

  deleteById = async (id) => {
    try {
      await messagesDao.deleteById(id);
    } catch (error) {
      winston.error("no se pudo borrar el mensaje. " + error);
      throw new Error("SERVER_ERROR");
    }
  };

  getAllMessages = async () => {
    try {
      return await messagesDao.listAll();
    } catch (error) {
      winston.error("no se pudo listar todos los mensajes. " + error);
      throw new Error("SERVER_ERROR");
    }
  };

  saveMessage = async (message) => {
    try {
      const msg = await messagesDao.saveObject(message);
      return msg;
    } catch (error) {
      winston.error("no se pudo guardar el mensaje. " + error);
      throw new Error("SERVER_ERROR");
    }
  };
}
