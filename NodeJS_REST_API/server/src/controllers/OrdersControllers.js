import { productsControllers, usersControllers } from "./index.js";
import OrdersService from "../service/OrdersService.js";
import {
  cartsService,
  productsService,
  usersService,
} from "../service/index.js";
import Order from "../models/Order.js";
import { winston } from "./loggersControllers.js";
import {
  sendBuyEtherealEmailToAdmin,
  sendBuyEtherealEmailToBuyer,
} from "../messaging/nodeMailer.js";

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
      winston.error(error);
      next(error);
    }
  };

  getAll = async (req, res, next) => {
    try {
      const orders = await this.#ordersService.getAll();
      const users = await usersControllers.getDbUsers();
      const index = users.findIndex((u) => u.email == req.user.email);
      if (index == -1) {
        winston.error("order controllers --> no se encontró el usuario");
        throw new Error("NOT_FOUND");
      } else {
        const userOrders = orders.filter((o) => o.userId == users[index].id);
        if (userOrders.length === 0) {
          winston.error(
            "order controllers --> el usuario no tiene ordernes actualmente"
          );
          throw new Error("NOT_FOUND");
        } else {
          res.json(userOrders);
        }
      }
    } catch (error) {
      winston.error(error);
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
          throw new Error("NOT_FOUND");
        } else {
          order.setProducts(cartProds);
          const orderId = await this.#ordersService.saveOrder(
            order.getOrderData()
          );

          cart.products = [];
          await cartsService.updateCart(cartId, cart);

          const orders = order.getProducts();
          users[index].orders.push(orders);
          await usersService.updateUser(users[index].id, users[index]);

         

          sendBuyEtherealEmailToAdmin(users[index], orders, orderId);
          sendBuyEtherealEmailToBuyer(users[index], orders, orderId);

          res.status(201).send(orderId);
        }
      } else {
        winston.error("orders controllers --> usuario no encontrado");
        throw new Error("NOT_FOUND");
      }
    } catch (error) {
      winston.error(error);
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
      winston.error(error);
      next(error);
    }
  };

  deleteOrder = async (req, res, next) => {
    try {
      const deletedOrder = await this.#ordersService.deleteOrder(req.params.id);
      res.json(deletedOrder);
    } catch (error) {
      winston.error(error);
      next(error);
    }
  };
}
