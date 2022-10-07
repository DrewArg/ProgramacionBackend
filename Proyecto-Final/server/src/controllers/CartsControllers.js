import CartsService from "../service/CartsService.js";
import { usersControllers } from "./index.js";

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
      const users = await usersControllers.getDbUsers();
      const index = users.findIndex((u) => u.email == req.user.email);
      if (index !== -1) {
        const userCartId = users[index].cartId;
        const userCart = await this.#cartsService.getBydId(userCartId);
        res.json(userCart.products);
      } else {
        throw new Error("NOT_FOUND");
      }
    } catch (error) {
      next(error);
    }
  };

  //TODO ver si este metodo hay que usarlo o bien deberia ser save Product in cart
  saveProductInCart = async (req, res, next) => {
    try {
      //TODO verificar que el producto exista antes de guardarlo
      // const prod = await productsControllers.getById(req.params.id);
      // if (!prod) {
      //   throw new Error("NOT_FOUND");
      // }
      const users = await usersControllers.getDbUsers();
      const index = users.findIndex((u) => u.email == req.user.email);
      if (index != -1) {
        const currUser = users[index];
        const userCart = await this.#cartsService.getBydId(currUser.cartId);
        const products = userCart.products;
        const productIndex = products.findIndex(
          (p) => p.productId === req.body.productId
        );
        if (productIndex === -1) {
          products.push({ productId: req.body.productId, quantity: 1 });
        } else {
          products[productIndex].quantity += 1;
        }
        const savedCart = await this.#cartsService.updateCart(
          currUser.cartId,
          userCart
        );

        res.status(201).json(savedCart);
      } else {
        throw new Error("NOT_FOUND");
      }
    } catch (error) {
      console.log(error);
    }
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
      console.log(req.params.id);
      //primero hay que verificar que exista en el carrito el item
      const deletedCart = await this.#cartsService.removeProductFromCart(
        req.params.id
      );
      res.json(deletedCart);
    } catch (error) {
      next(error);
    }
  };
}
