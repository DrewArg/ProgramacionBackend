import Cart from "../models/Cart.js";

export default class CartsService {
  #cartsDao;

  /**
   * @param {dao} cartsDao
   */
  constructor(cartsDao) {
    this.#cartsDao = cartsDao;
  }

  async getBydId(id) {
    return await this.#cartsDao.listById(id);
  }

  //TODO verificar este metodo porque tiene que retornar los productos del carrito y no los carritos
  async getProducts() {
    return await this.#cartsDao.listAll();
  }

  async saveCart() {
    const cart = new Cart();
    return await this.#cartsDao.saveObject(cart.getCartData());
  }

  async updateCart(cartId, cartData) {
    const updated = await this.#cartsDao.updateObject(
      cartId,cartData);
    return updated;
  }

  async deleteCart(cartId) {
    await this.#cartsDao.deleteById(cartId);
  }
}
