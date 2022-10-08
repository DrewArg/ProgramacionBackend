import { winston } from "../../controllers/loggersControllers.js";
import { PERSISTANCE } from "../../config/config.js";
import DaoMongoAtlas from "../containers/DaoMongoAtlas.js";

let imagesDao, usersDao, productsDao, cartsDao, ordersDao, productListDao, messagesDao;

switch (PERSISTANCE) {
  case "mongoAtlas":
    try {
      imagesDao = new DaoMongoAtlas("images");
      productsDao = new DaoMongoAtlas("products");
      cartsDao = new DaoMongoAtlas("carts");
      ordersDao = new DaoMongoAtlas("orders");
      usersDao = new DaoMongoAtlas("users");
      productListDao = new DaoMongoAtlas("productList");
      messagesDao = new DaoMongoAtlas("messages");
    } catch (error) {
      winston.log("error", `daoIndex -->  ${error}`);
    }
    break;

  default:
    try {
      imagesDao = new DaoMongoAtlas("images");
      productsDao = new DaoMongoAtlas("products");
      cartsDao = new DaoMongoAtlas("carts");
      ordersDao = new DaoMongoAtlas("orders");
      usersDao = new DaoMongoAtlas("users");
      productListDao = new DaoMongoAtlas("productList");
      messagesDao = new DaoMongoAtlas("messages");

    } catch (error) {
      winston.log("error", `daoIndex -->  ${error}`);
    }
    break;
}

export {
  imagesDao,
  usersDao,
  productsDao,
  cartsDao,
  ordersDao,
  productListDao,
  messagesDao
};
