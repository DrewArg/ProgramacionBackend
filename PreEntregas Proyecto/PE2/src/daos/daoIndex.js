import config from "../config.js";

let productsDao;
let cartsDao;

switch (config.PERSISTANCE_MODE) {
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

export { productsDao, cartsDao };
