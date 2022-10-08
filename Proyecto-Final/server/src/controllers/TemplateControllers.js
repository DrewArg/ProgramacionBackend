import { winston } from "./loggersControllers.js";

export default class TemplateControllers {
  constructor() {}

  getRootTemplate = async (req, res, next) => {
    try {
      res.render("layouts/index.handlebars", {
        layout: "index",
        root: "public",
      });
    } catch (error) {
      winston.error(
        "template controllers --> no se pudo renderizar la página raiz. " +
          error
      );
    }
  };
}
