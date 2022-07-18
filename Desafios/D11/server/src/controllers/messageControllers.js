import { messagesDao } from "../daos/daoIndex.js";

const messageController = {
  async getById(id) {
    try {
      const msg = await messagesDao.listById(id);
      return msg;
    } catch (e) {
      console.error(
        "Message controller --> " + e
      );
    }
  },

  async updateMessage(message) {
    try {
      const msg = await messagesDao.updateObject(message);
      return msg;
    } catch (e) {
      console.error(
        "Message controller --> " + e
      );
    }
  },

  async deleteById(id) {
    try {
      await messagesDao.deleteById(id);
      return { ok: "Message controller --> mensaje eliminado correctamente" };
    } catch (e) {
      console.error(
        "Message controller -->  " + error
      );
    }
  },

  async getAllMessages() {
    try {
      return await messagesDao.listAll();
    } catch (error) {
      console.error(
        "Message controller --> " + error
      );
    }
  },

  async saveMessage(message) {
    try {
      const msg = await messagesDao.saveObject(message);
      return msg;
    } catch (error) {
      console.error(
        "Message controller -->  " + error
      );
    }
  },
};

export default messageController;
