import CartsService from "../service/CartsService.js";
import { cartsControllers, usersControllers } from "./index.js";

export default class CartsControllers {
  #cartsService;
  /**
   * @param {CartsService} cartsService
   */
  constructor(cartsService) {
    this.#cartsService = cartsService;
  }

  getById = async (req, res, next) => {
    try {
      const cart = await this.#cartsService.getBydId(req.params.id);
      res.json(cart);
    } catch (error) {
      next(error);
    }
  };

  getProducts = async (req, res, next) => {
    try {
      const productsInCart = await this.#cartsService.getProducts();
      res.json(productsInCart);
    } catch (error) {
      next(error);
    }
  };

  //TODO ver si este metodo hay que usarlo o bien deberia ser save Product in cart
  saveProductInCart = async (req, res, next) => {
    try {
      console.log("save product");
      console.log(req.user);
      //TODO DESCOMENTAR Y CODEAR REVISAR ESTO!
      const users = await usersControllers.getDbUsers();
      const index = users.findIndex((u) => u.email == req.user.email);
      console.log(index);
      if (index != -1) {
        console.log("aca");
        console.log(users[index]);
        const userData = users[index].getUserData();
        console.log(userData);
        console.log("userCart");
        console.log(userData.cart);
        userCart.addProduct(req.body.productId, 1);
        const savedCart = await this.#cartsService.updateCart(
          userCart.getId(),
          userCart
        );
        res.status(201).json(savedCart);
      } else {
        throw new Error("NOT_FOUND");
      }
    } catch (error) {}
  };

  updateCart = async (req, res, next) => {
    try {
      const updatedCart = await this.#cartsService.updateCart(
        req.params.id,
        req.body
      );
      res.json(updatedCart);
    } catch (error) {
      next(error);
    }
  };

  removeProductFromCart = async (req, res, next) => {
    try {
      //TODO DESCOMENTAR Y CODEAR
      // const deletedCart = await this.#cartsService.removeProductFromCart(req.params.id)
      res.json(deletedCart);
    } catch (error) {
      next(error);
    }
  };
}
