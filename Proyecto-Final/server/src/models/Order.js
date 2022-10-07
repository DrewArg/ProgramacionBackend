import { winston } from "../controllers/loggersControllers.js";
import Id from "./Id.js";

export default class Order {
  #id;
  #products;
  #timestamp;

  constructor() {
    this.#id = new Id().getNewId();
    this.#timestamp = new Date();
  }

  /**
   * @param {Product[]} cartProducts
   */
  setProducts(cartProducts) {
    if (!cartProducts) {
      winston.error("order --> los cartProducts son requeridos");
      throw new Error("MISSING_REQUIRED_PARAM");
    }
    this.#products = cartProducts;
  }

  getId() {
    return this.#id;
  }
  getProducts() {
    return this.#products;
  }
  getTimestamp() {
    return this.#timestamp;
  }

  getOrderData() {
    return JSON.parse(
      JSON.stringify(
        Object.freeze({
          id: this.#id,
          products: this.#products,
          timestamp: this.#timestamp,
        })
      )
    );
  }
}
