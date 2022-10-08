import { usersControllers } from "./index.js";
import OrdersService from "../service/OrdersService.js";
import { cartsService } from "../service/index.js";
import User from "../models/User.js";
import Order from "../models/Order.js";
import { winston } from "./loggersControllers.js";

export default class OrdersControllers {
  #ordersService;

  /**
   * @param {OrdersService} ordersService
   */
  res;
  constructor(ordersService) {
    this.#ordersService = ordersService;
  }

  getById = async (req, res, next) => {
    try {
      const ord = await this.#ordersService.getById(req.params.id);
      res.json(ord);
    } catch (error) {
      next(error);
    }
  };

  getAll = async (req, res, next) => {
    try {
      const orders = await this.#ordersService.getAll();
      res.json(orders);
    } catch (error) {
      next(error);
    }
  };

  saveOrder = async (req, res, next) => {
    try {
      const users = await usersControllers.getDbUsers();
      const index = users.findIndex((u) => u.email == req.user.email);
      if (index !== -1) {
        const cartId = users[index].cartId;
        const cart = await cartsService.getBydId(cartId);
        const cartProds = cart.products;
        const order = new Order(users[index].id);
        if (cartProds.length === 0) {
          winston.error(
            "orders controllers --> el carrito no tiene productos actualmente"
          );
          throw new Error("BAD_REQUEST");
        } else {
          order.setProducts(cartProds);
          await this.#ordersService.saveOrder(order.getOrderData());
          cart.products = [];
          await cartsService.updateCart(cartId, cart);

          //TODO NOTIFICAR AL ADMIN DE LA VENTA VIA MAIL
          //TODO NOTIFICAR AL USUARIO DEL NUEVO PEDIDO REALIZADO VIA MAIL
          res.status(201).send();
        }
      } else {
        winston.error("orders controllers --> usuario no encontrado");
        throw new Error("NOT_FOUND");
      }
    } catch (error) {
      next(error);
    }
  };

  updateOrder = async (req, res, next) => {
    try {
      const updatedOrder = await this.#ordersService.updateOrder(
        req.params.id,
        req.body
      );
      res.json(updatedOrder);
    } catch (error) {
      next(error);
    }
  };

  deleteOrder = async (req, res, next) => {
    try {
      const deletedOrder = await this.#ordersService.deleteOrder(req.params.id);
      res.json(deletedOrder);
    } catch (error) {
      next(error);
    }
  };
}
