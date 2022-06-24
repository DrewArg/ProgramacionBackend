import config from "../config.js";

let productsDao;
let cartsDao;

switch (config.PRODUCTS_PERSISTANCE_MODE) {
  case "products-json":
    const { default: DaoArchive } = await import("./DaoArchive.js");
    productsDao = new DaoArchive(config.fileSystem.products.path);
    break;

  case "products-firebase":
    const { default: DaoFirebase } = await import("./DaoFirebase.js");
    productsDao = new DaoFirebase("products");
    break;
  case "products-mongodb":
    const { default: DaoMongoDb } = await import("./DaoMongoDb.js");
    productsDao = new DaoMongoDb("products");
    break;

  default:
    const { default: DaoMemory } = await import("./DaoMemory.js");
    productsDao = new DaoMemory();
    break;
}

switch (config.CARTS_PERSISTANCE_MODE) {
  case "carts-json":
    const { default: DaoArchive } = await import("./DaoArchive.js");
    cartsDao = new DaoArchive(config.fileSystem.carts.path);
    break;

  case "carts-firebase":
    const { default: DaoFirebase } = await import("./DaoFirebase.js");
    cartsDao = new DaoFirebase("carts");
    break;
  case "carts-mongodb":
    const { default: DaoMongoDb } = await import("./DaoMongoDb.js");
    cartsDao = new DaoMongoDb("carts");
    break;

  default:
    const { default: DaoMemory } = await import("./DaoMemory.js");
    cartsDao = new DaoMemory();
    break;
}
export { productsDao, cartsDao };
