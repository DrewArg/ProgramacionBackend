import config from "../config.js";

let productsDao;
let messagesDao;

switch (config.PRODUCTS_PERSISTANCE_MODE) {
  case "products-mongodb":
    const { default: DaoMongoDb } = await import("./DaoMongoDb.js");
    productsDao = new DaoMongoDb("products");
    break;

  default:
    const { default: DaoMongoDb2 } = await import("./DaoMongoDb.js");
    productsDao = new DaoMongoDb2("products");
    break;
}

switch (config.MESSAGES_PERSISTANCE_MODE) {
  case "messages-mongodb":
    const { default: DaoMongoDb } = await import("./DaoMongoDb.js");
    messagesDao = new DaoMongoDb("messages");
    break;

  default:
    const { default: DaoMongoDb2 } = await import("./DaoMongoDb.js");
    messagesDao = new DaoMongoDb2("messages");
    break;
}

export { productsDao, messagesDao };
