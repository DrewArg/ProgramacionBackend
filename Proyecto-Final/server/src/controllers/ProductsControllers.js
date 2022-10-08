import { productListService } from "../service/index.js";
import ProductsService from "../service/ProductsService.js";
import { productListController } from "./index.js";
import { winston } from "./loggersControllers.js";

export default class ProductsControllers {
  #productsService;
  /**
   * @param {ProductsService} productsService
   */
  constructor(productsService) {
    this.#productsService = productsService;
  }

  getById = async (req, res, next) => {
    try {
      const prod = await this.#productsService.getById(req.params.id);
      if (!prod) {
        throw new Error("NOT_FOUND");
      } else {
        res.json(prod);
      }
    } catch (error) {
      winston.error(error);
      next(error);
    }
  };

  getAll = async (req, res, next) => {
    try {
      const products = await this.#productsService.getAllProducts();
      res.json(products);
    } catch (error) {
      winston.error(error);
      next(error);
    }
  };

  saveProduct = async (req, res, next) => {
    try {
      const savedProdId = await this.#productsService.saveProduct(req.body);
      await productListController.saveProduct(savedProdId);
      res.status(201).json(savedProdId);
    } catch (error) {
      winston.error(error);
      next(error);
    }
  };

  updateProduct = async (req, res, next) => {
    try {
      const updatedProduct = await this.#productsService.updateProduct(
        req.params.id,
        req.body
      );
      res.json(updatedProduct);
    } catch (error) {
      winston.error(error);
      next(error);
    }
  };

  deleteProduct = async (req, res, next) => {
    try {
      const deletedProdut = await this.#productsService.deleteProduct(
        req.params.id
      );
      await productListService.deleteProduct(req.params.id);
      res.json(deletedProdut);
    } catch (error) {
      winston.error(error);
      next(error);
    }
  };
}
