import { cartIdDao } from "../daos/daoIndex.js";

const cartIdController = {
  async saveCartId(cartId) {
    try {
      const currCartId = await cartIdDao.saveObject(cartId);
      return currCartId;
    } catch (error) {
      console.error(
        `CartId controller --> No se pudo guardar el id. Error: ${error}`
      );
    }
  },

  async cartIdExist() {
    try {
      const ids = await cartIdDao.listAll();
      if (ids.length > 0) {
        return ids[0]
      } else {
        return false;
      }
    } catch (error) {
      console.error("CartId controller --> no se pudo verificar si existen ids de carrito. " +error);
    }
  },

  async getById(id) {
    try {
      const cartId = await cartIdDao.listById(id);
      return cartId;
    } catch (e) {
      console.error(
        "CartId controller --> no se pudo obtener el cartId. Error: " + e
      );
    }
  },

  async deleteById(cartId) {
    try {
      await cartIdDao.deleteById(cartId);
    } catch (e) {
      console.error(
        "CartId controller --> No se pudo borrar el cartId. Error: " + error
      );
    }
  },
};

export default cartIdController;
