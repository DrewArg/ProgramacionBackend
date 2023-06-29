import { Router } from "express";
import { authenticate } from "../middlewares/jwt.js";

export default class LoginRouter {
  #loginRouter;
  constructor() {
    this.#loginRouter = Router().post("/", authenticate);
  }

  get() {
    return this.#loginRouter;
  }
}
