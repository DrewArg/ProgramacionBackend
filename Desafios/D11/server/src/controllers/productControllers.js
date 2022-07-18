import { productsDao, mockProductsDao } from "../daos/daoIndex.js";

const productController = {
  async getById(id) {
    try {
      const prod = await productsDao.listById(id);
      return prod;
    } catch (e) {
      console.error(
        "Product controller --> " + e
      );
    }
  },

  async getMockProductData() {
    try {
      const prod = await mockProductsDao.randomProductData();
      return prod
    } catch (error) {
      console.error(
        "Product controller --> " +
        error
      );
    }
  },

  async updateProduct(product) {
    try {
      const prod = await productsDao.updateObject(product);
      return prod;
    } catch (e) {
      console.error(
        "Product controller -->  " + e
      );
    }
  },

  async deleteById(id) {
    try {
      await productsDao.deleteById(id);
      return { ok: "Product controller --> producto eliminado correctamente" };
    } catch (e) {
      console.error(
        "Product controller -->  " + error
      );
    }
  },

  async getAllProducts() {
    try {
      return await productsDao.listAll();
    } catch (error) {
      console.error(
        "Product controller -->  " + error
      );
    }
  },

  async saveProduct(product) {
    try {
      const prod = await productsDao.saveObject(product);
      return prod;
    } catch (error) {
      console.error(
        "Product controller -->  " + error
      );
    }
  },
};

export default productController;
