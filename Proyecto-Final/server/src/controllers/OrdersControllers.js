import { usersControllers } from "./index.js";
import OrdersService from "../service/OrdersService.js";
import { cartsService } from "../service/index.js";

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
      console.log(req.user);
      const users = await usersControllers.getDbUsers();
      const index = users.findIndex((u) => u.email == req.user.email);
      if (index !== -1) {
        const cartId = users[index].cartId;
        const cart = await cartsService.getBydId(cartId);
        const cartProds = cart.products;
        console.log("cart prods");
        console.log(cartProds);
        const orderId = users[index].addOrder();
        console.log(orderId);
        console.log(users[index]);
      }
      const savedOrder = await this.#ordersService.saveOrder(req.body);
      res.status(201).json(savedOrder);
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
