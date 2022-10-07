export default class ProductListService {
  #productListDao;

  /**
   * @param {dao} productListDao
   */
  constructor(productListDao) {
    this.#productListDao = productListDao;
  }

  async getProductById(productId) {
    return await this.#productListDao.listById(productId);
  }

  async getAllProducts() {
    return await this.#productListDao.listAll();
  }

  async saveProduct(productId) {
    const product = { productId: productId };
    return await this.#productListDao.saveObject(product);
  }

  async deleteProduct(productId) {
    return await this.#productListDao.deleteById(productId);
  }
}
