import ProductListService from "../service/ProductListService.js";
import { winston } from "./loggersControllers.js";

export default class ProductListControllers {
  #productListService;

  /**
   * @param {ProductListService} productListService
   */
  constructor(productListService) {
    this.#productListService = productListService;
  }

  getAllProducts = async () => {
    try {
      return await this.#productListService.getAllProducts();
    } catch (error) {
      winston.error(error)
      next(error);
    }
  };

  saveProduct = async (productId) => {
    return await this.#productListService.saveProduct(productId);
  };

  deleteProduct = async (productId) => {
    return await this.#productListService.deleteProduct(productId);
  };
}
