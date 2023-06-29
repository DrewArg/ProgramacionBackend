import { winston } from "../controllers/loggersControllers.js";
import Id from "./Id.js";

export default class Order {
  #id;
  #products;
  #timestamp;
  #userId;

  constructor(userId) {
    this.#id = new Id().getNewId();
    this.#timestamp = new Date();
    this.#userId = userId;
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
  getUserId() {
    return this.#userId;
  }

  getOrderData() {
    return JSON.parse(
      JSON.stringify(
        Object.freeze({
          id: this.#id,
          products: this.#products,
          timestamp: this.#timestamp,
          userId: this.#userId,
        })
      )
    );
  }
}
