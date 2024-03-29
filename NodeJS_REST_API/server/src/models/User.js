import Order from "./Order.js";
import Id from "./Id.js";
import { winston } from "../controllers/loggersControllers.js";

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
    this.#id = new Id().getNewId();
    this.#orders = [];
  }

  addOrder() {
    const newOrderId = new Order().getId()
    this.#orders.push(newOrderId);
    return newOrderId
  }

  #setEmail(email) {
    if (!email){
      winston.error('user --> el email es requerido')
      throw new Error("MISSING_REQUIRED_PARAM");
    } 
    this.#email = email;
  }

  #setPassword(password) {
    if (!password){
      winston.error('user --> el password es requerido')
      throw new Error("MISSING_REQUIRED_PARAM");
    } 
    this.#password = password;
  }

  /**
   * @param {string} name
   */
  setName(name) {
    if (!name){
      winston.error('user --> el name es requerido')
      throw new Error("MISSING_REQUIRED_PARAM");
    } 
    this.#name = name;
  }

  /**
   * @param {string} lastname
   */
  setLastname(lastname) {
    if (!lastname){
      winston.error('user --> el lastname es requerido')
      throw new Error("MISSING_REQUIRED_PARAM");
    } 
    this.#lastname = lastname;
  }

  /**
   * @param {number} phone
   */
  setPhone(phone) {
    if (!phone){
      winston.error('user --> el phone es requerido')
      throw new Error("MISSING_REQUIRED_PARAM");
    } 
    this.#phone = phone;
  }

  /**
   * @param {string} image
   */
  setImage(image) {
    if (!image){
      winston.error('user --> la image url es requerida')
      throw new Error("MISSING_REQUIRED_PARAM");
    } 
    this.#image = image;
  }

  #setCartId(cartId) {
    if (!cartId){
      winston.error('user --> el cartId es requerido')
      throw new Error("MISSING_REQUIRED_PARAM");
    } 
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
