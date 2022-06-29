import config from "../config.js";

let productsDao;
let mockProductsDao;
let messagesDao;

switch (config.MOCKPRODUCTS_PERSISTANCE_MODE) {
  case "mockProducts-memory":
    const {default : ApiProductsMock} = await import("./ApiProductsMock.js")
    mockProductsDao = new ApiProductsMock()
    break;

  default:
    const { default: DaoMockMongo } = await import("./DaoMongoDb.js");
    mockProductsDao = new DaoMockMongo("mockProductsD9");
    break;
}

switch (config.PRODUCTS_PERSISTANCE_MODE) {
  case "products-mongodb":
    const { default: DaoMongoDb } = await import("./DaoMongoDb.js");
    productsDao = new DaoMongoDb("productsD9");
    break;

  default:
    const { default: DaoMongoDb2 } = await import("./DaoMongoDb.js");
    productsDao = new DaoMongoDb2("productsD9");
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

export { productsDao, messagesDao , mockProductsDao};
