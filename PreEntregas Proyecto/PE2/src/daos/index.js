import config from "../../config.js";

let productsDao;
//let cartsDao;

switch (config.PERSISTANCE_MODE) {
  case "products-json":
    const { default: ProductsDaoArchive } = await import(
      "./products/ProductsDaoArchive.js"
    );
    productsDao = new ProductsDaoArchive(config.filesystem.path);
    break;

  case "products-firebase":
    const { default: ProductsDaoFirebase } = await import(
      "./products/ProductsDaoFirebase.js"
    );
    productsDao = new ProductsDaoFirebase();
    break;
  case "products-mongodb":
    const { default: ProductsDaoMongoDb } = await import(
      "./products/ProductsDaoMongoDb.js"
    );
    productsDao = new ProductsDaoMongoDb();
    break;
  case "products-memory":
    const { default: ProductsDaoMemory } = await import(
      "./products/ProductsDaoMemory.js"
    );
    productsDao = new ProductsDaoMemory();
    break;

  default:
    break;
}

export { productsDao };
