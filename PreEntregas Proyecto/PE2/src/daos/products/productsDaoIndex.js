import config from "../../config.js";

let productsDao;
//let cartsDao;

switch (config.PERSISTANCE_MODE) {
  case "products-json":
    const { default: ProductsDaoArchive } = await import(
      "./ProductsDaoArchive.js"
    );
    productsDao = new ProductsDaoArchive(config.fileSystem.path);
    break;

  case "products-firebase":
    const { default: ProductsDaoFirebase } = await import(
      "./ProductsDaoFirebase.js"
    );
    productsDao = new ProductsDaoFirebase("products");
    break;
  case "products-mongodb":
    const { default: ProductsDaoMongoDb } = await import(
      "./ProductsDaoMongoDb.js"
    );
    productsDao = new ProductsDaoMongoDb("products");
    break;
  case "products-memory":
    const { default: ProductsDaoMemory } = await import(
      "./ProductsDaoMemory.js"
    );
    productsDao = new ProductsDaoMemory();
    break;

  default:
    break;
}

export { productsDao };
