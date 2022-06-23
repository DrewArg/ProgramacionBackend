import { productsDao } from "../daos/daoIndex.js";

const productController = {
  async getById(id) {
    try {
      const prod = await productsDao.listById(id);
      return prod;
    } catch (e) {
      console.error(
        "Product controller --> no se pudo obtener el producto. Error: " + e
      );
    }
  },

  async updateProduct(product) {
    try {
      const prod = await productsDao.updateObject(product);
      return prod;
    } catch (e) {
      console.error(
        "Product controller --> no se pudo actualizar el producto. Error: " + e
      );
    }
  },

  async deleteById(id) {
    try {
      await productsDao.deleteById(id);
      return { ok: "Product controller --> producto eliminado correctamente" };
    } catch (e) {
      console.error(
        "Product controller --> No se pudo borrar el producto. Error: " + error
      );
    }
  },

  getAllProducts: () => {
    return productsDao.listAll();
  },

  async saveProduct(product) {
    try {
      const prod = await productsDao.saveObject(product);
      return prod;
    } catch (error) {
      console.error(
        "Product controller --> No se pudo guardar el producto. Error: " + error
      );
    }
  },
};

export default productController;
