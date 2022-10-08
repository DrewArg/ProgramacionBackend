import { Router } from "express";
import OrdersControllers from "../controllers/OrdersControllers.js";
import { authorize } from "../middlewares/jwt.js";

export default class OrdersRouter {
  #ordersRouter;

  /**
   * @param {OrdersControllers} ordersControllers
   */
  constructor(ordersControllers) {
    this.#ordersRouter = Router()
      .get("/", authorize, (req, res, next) =>
        ordersControllers.getAll(req, res, next)
      )
      .post("/", authorize, (req, res, next) =>
        ordersControllers.saveOrder(req, res, next)
      );
  }

  get() {
    return this.#ordersRouter;
  }
}
