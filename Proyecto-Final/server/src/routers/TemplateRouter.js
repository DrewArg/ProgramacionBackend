import { Router } from "express";
import TemplateControllers from "../controllers/TemplateControllers.js";

export default class TemplateRouter {
  #templatesRouter;

  /**
   * @param {TemplateControllers} templateControllers
   */
  constructor(templateControllers) {
    this.#templatesRouter = Router()
      .get("/", (req, res, next) =>
        templateControllers.getRootTemplate(req, res, next)
      )
      .post("/", (req, res, next) =>
        templateControllers.postRootTemplate(req, res, next)
      );
  }

  get() {
    return this.#templatesRouter;
  }
}
