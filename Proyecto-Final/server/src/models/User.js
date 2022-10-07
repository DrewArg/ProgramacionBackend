import Cart from "./Cart.js";
import Id from "./Id.js";

export default class User {
  #id;
  #email;
  #password;
  #name;
  #lastname;
  #phone;
  #image;
  #cartId;
  #orders;

  //TODO CAMBIAR LOS THROW DE LOS ERRORES EN TODOS LOS MODELOS PARA QUE UTILICEN EL ERROR HANDLER
  //TODO ver si el usuario no tiene mas requeridos al registrarse
  /**
   * @param {string} email
   * @param {string} password
   * @param {string} name
   * @param {string} lastname
   * @param {string} phone
   * @param {string} image
   * @param {string} cartId
   */
  constructor(email, password, name, lastname, phone, image, cartId) {
    this.#setEmail(email);
    this.#setPassword(password);
    this.setName(name);
    this.setLastname(lastname);
    this.setPhone(phone);
    this.setImage(image);
    this.#setCartId(cartId);
    // this.#cartId = new Cart().getId();
    this.#id = new Id().getNewId();
    this.#orders = [];
  }

  /**
   * @param {Order} order
   */
  addOrder(order) {
    if (!order) throw new Error(`The order is required`);
    this.#orders.push(order);
  }

  #setEmail(email) {
    if (!email) throw new Error("MISSING_REQUIRED_PARAM");
    this.#email = email;
  }

  #setPassword(password) {
    if (!password) throw new Error("MISSING_REQUIRED_PARAM");
    this.#password = password;
  }

  /**
   * @param {string} name
   */
  setName(name) {
    if (!name) throw new Error("MISSING_REQUIRED_PARAM");
    this.#name = name;
  }

  /**
   * @param {string} lastname
   */
  setLastname(lastname) {
    if (!lastname) throw new Error("MISSING_REQUIRED_PARAM");
    this.#lastname = lastname;
  }

  /**
   * @param {number} phone
   */
  setPhone(phone) {
    if (!phone) throw new Error("MISSING_REQUIRED_PARAM");
    this.#phone = phone;
  }

  /**
   * @param {string} image
   */
  setImage(image) {
    if (!image) throw new Error("MISSING_REQUIRED_PARAM");
    this.#image = image;
  }

  #setCartId(cartId) {
    if (!cartId) throw new Error("MISSING_REQUIRED_PARAM");
    this.#cartId = cartId;
  }

  getId() {
    return this.#id;
  }
  getEmail() {
    return this.#email;
  }
  getPassword() {
    return this.#password;
  }
  getName() {
    return this.#name;
  }
  getLastname() {
    return this.#lastname;
  }
  getPhone() {
    return this.#phone;
  }
  getImage() {
    return this.#image;
  }
  getCartId() {
    return this.#cartId;
  }

  getOrders() {
    return this.#orders;
  }

  getUserData() {
    return JSON.parse(
      JSON.stringify(
        Object.freeze({
          id: this.#id,
          email: this.#email,
          password: this.#password,
          name: this.#name,
          lastname: this.#lastname,
          phone: this.#phone,
          image: this.#image,
          cartId: this.#cartId,
          orders: this.#orders,
        })
      )
    );
  }
}
