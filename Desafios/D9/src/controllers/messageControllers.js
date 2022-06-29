import { messagesDao } from "../daos/daoIndex.js";

const messageController = {
  async getById(id) {
    try {
      const msg = await messagesDao.listById(id);
      return msg;
    } catch (e) {
      console.error(
        "Message controller --> no se pudo obtener el mensaje. Error: " + e
      );
    }
  },

  async updateMessage(message) {
    try {
      const msg = await messagesDao.updateObject(message);
      return msg;
    } catch (e) {
      console.error(
        "Message controller --> no se pudo actualizar el mensaje. Error: " + e
      );
    }
  },

  async deleteById(id) {
    try {
      await messagesDao.deleteById(id);
      return { ok: "Message controller --> mensaje eliminado correctamente" };
    } catch (e) {
      console.error(
        "Message controller --> No se pudo borrar el mensaje. Error: " + error
      );
    }
  },

  async getAllMessages() {
    try {
      return await messagesDao.listAll();
    } catch (error) {
      console.error(
        "Message controller --> No se pudo listar todos los mensajes. " + error
      );
    }
  },

  async saveMessage(message) {
    try {
      const msg = await messagesDao.saveObject(message);
      return msg;
    } catch (error) {
      console.error(
        "Message controller --> No se pudo guardar el mensaje. Error: " + error
      );
    }
  },
};

export default messageController;

/*
const productController = {
  getAllProducts: async () => {
    const prods = await products.getAll();
    return prods;
  },

  save: async (req, res) => {
    const prod = await products.save(req.body);
    return prod;
  },

  saveProduct: async (product) => {
    await products.save(product)
  }
};

const messageController = {
  getAllMessages: async () => {
    const msgs = await messages.getAll();
    return msgs;
  },

  save: async (req, res) => {
    const message = await messages.save(req.body);
    return message;
  },

  saveMessage: async(message) => {
    return await messages.save(message);
  }
};

*/