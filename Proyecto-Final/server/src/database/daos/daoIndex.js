import { winston } from "../../controllers/loggersControllers.js";
import { PERSISTANCE } from "../../config/config.js";
import DaoMongoAtlas from "../containers/DaoMongoAtlas.js";

let imagesDao, usersDao, productsDao, cartsDao, ordersDao, productListDao;

//TODO agregar conexion a mongodb local para desarrollo

switch (PERSISTANCE) {
  case "mongoAtlas":
    try {
      imagesDao = new DaoMongoAtlas("images");
      productsDao = new DaoMongoAtlas("products");
      cartsDao = new DaoMongoAtlas("carts");
      ordersDao = new DaoMongoAtlas("orders");
      usersDao = new DaoMongoAtlas("users");
      productListDao = new DaoMongoAtlas("productList");
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
};
