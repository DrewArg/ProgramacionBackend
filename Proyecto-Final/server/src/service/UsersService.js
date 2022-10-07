import Cart from "../models/Cart.js";
import User from "../models/User.js";

export default class UsersService {
  #usersDao;
  #cartsDao;

  /**
   * @param {dao} usersDao
   * @param {dao} cartsDao
   */
  constructor(usersDao, cartsDao) {
    this.#usersDao = usersDao;
    this.#cartsDao = cartsDao;
  }

  async getById(id) {
    return await this.#usersDao.listById(id);
  }

  async getAllUsers() {
    return await this.#usersDao.listAll();
  }

  async saveUser({ email, password, name, lastname, phone, image }) {
    const userCart = new Cart();
    console.log(userCart);
    const userCartId = await this.#cartsDao.saveObject(userCart.getCartData());
    const user = new User(
      email,
      password,
      name,
      lastname,
      phone,
      image,
      userCartId
    );
    return await this.#usersDao.saveObject(user.getUserData());
  }

  async updateUser(userId, userData) {
    const updated = await this.#usersDao.updateObject(
      userId,
      JSON.parse(JSON.stringify(userData))
    );
    return updated;
  }

  async deleteUser(userId) {
    await this.#usersDao.deleteById(userId);
  }
}
