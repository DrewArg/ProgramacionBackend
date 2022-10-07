import Order from "./Order.js";
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

  addOrder() {
    //nO ESTA ENTRANDO ACA
    console.log("ACA");
    const newOrderId = new Order().getId()
    this.#orders.push(newOrderId);
    return newOrderId
  }

  #setEmail(email) {
    winston.error('user --> el email es requerido')
    if (!email) throw new Error("MISSING_REQUIRED_PARAM");
    this.#email = email;
  }

  #setPassword(password) {
    winston.error('user --> el password es requerido')
    if (!password) throw new Error("MISSING_REQUIRED_PARAM");
    this.#password = password;
  }

  /**
   * @param {string} name
   */
  setName(name) {
    winston.error('user --> el name es requerido')
    if (!name) throw new Error("MISSING_REQUIRED_PARAM");
    this.#name = name;
  }

  /**
   * @param {string} lastname
   */
  setLastname(lastname) {
    winston.error('user --> el lastname es requerido')
    if (!lastname) throw new Error("MISSING_REQUIRED_PARAM");
    this.#lastname = lastname;
  }

  /**
   * @param {number} phone
   */
  setPhone(phone) {
    winston.error('user --> el phone es requerido')
    if (!phone) throw new Error("MISSING_REQUIRED_PARAM");
    this.#phone = phone;
  }

  /**
   * @param {string} image
   */
  setImage(image) {
    winston.error('user --> la image url es requerida')
    if (!image) throw new Error("MISSING_REQUIRED_PARAM");
    this.#image = image;
  }

  #setCartId(cartId) {
    winston.error('user --> el cartId es requerido')
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
