import { Router } from "express";
import ImagesControllers from "../controllers/ImagesControllers.js";
import { oneFileMiddleware } from "../middlewares/multer.js";

export default class ImagesRouter {
  #imagesRouter;

  /**
   * @param {ImagesControllers} imagesControllers
   */

  constructor(imagesControllers) {
    this.#imagesRouter = Router().post(
      "/",
      oneFileMiddleware,
      (req, res, next) => imagesControllers.saveImage(req, res, next)
    );
  }

  get() {
    return this.#imagesRouter;
  }
}
