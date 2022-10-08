import CartsService from "../service/CartsService.js";
import { usersControllers, productListController } from "./index.js";
import { winston } from "./loggersControllers.js";

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
      winston.error(error);
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
        winston.warn("carts controllers --> usuario no encontrado");
        throw new Error("NOT_FOUND");
      }
    } catch (error) {
      winston.error(error);
      next(error);
    }
  };

  saveProductInCart = async (req, res, next) => {
    try {
      const productList = await productListController.getAllProducts();
      const indexProdList = productList.findIndex(
        (pl) => pl.productId == req.body.productId
      );
      if (indexProdList === -1) {
        winston.warn("carts controllers --> producto no encontrado");
        throw new Error("NOT_FOUND");
      }
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
        winston.warn("carts controllers --> usuario no encontrado");
        throw new Error("NOT_FOUND");
      }
    } catch (error) {
      winston.error(error)
      next(error);
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
      winston.error(error)
      next(error);
    }
  };

  removeProductFromCart = async (req, res, next) => {
    try {
      const users = await usersControllers.getDbUsers();
      const index = users.findIndex((u) => u.email == req.user.email);
      if (index !== -1) {
        const cartId = users[index].cartId;
        const cart = await this.#cartsService.getBydId(cartId);
        const products = cart.products;
        const productIndex = products.findIndex(
          (p) => p.productId == req.params.id
        );
        if (productIndex !== -1) {
          if (products[productIndex].quantity >= 2) {
            products[productIndex].quantity -= 1;
          } else {
            products.splice(productIndex, 1);
          }
          await this.#cartsService.updateCart(cartId, cart);
          res.status(200).send();
        } else {
          winston.warn("carts controllers --> producto no encontrado");
          throw new Error("NOT_FOUND");
        }
      } else {
        winston.warn("carts controllers --> usuario no encontrado");
        throw new Error("NOT_FOUND");
      }
    } catch (error) {
      winston.error(error)
      next(error);
    }
  };
}
