import config from "../config.js";

let productsDao;
let mockProductsDao;
let mockUsersDao;
let messagesDao;

switch (config.MOCKUSERS_PERSISTANCE_MODE) {
  case "mockUsers-memory":
    const { default: MockApi } = await import("./MockApi.js");
    mockUsersDao = new MockApi();
    break;

  default:
    const { default: DaoMockMongo } = await import("./DaoMongoDb.js");
    mockUsersDao = new DaoMockMongo("mockUsersD9");
    break;
}

switch (config.MOCKPRODUCTS_PERSISTANCE_MODE) {
  case "mockProducts-memory":
    const { default: MockApi } = await import("./MockApi.js");
    mockProductsDao = new MockApi();
    break;

  default:
    const { default: DaoMockMongo } = await import("./DaoMongoDb.js");
    mockProductsDao = new DaoMockMongo("mockProductsD9");
    break;
}

switch (config.PRODUCTS_PERSISTANCE_MODE) {
  case "products-mongodb":
    const { default: DaoMongoDb } = await import("./DaoMongoDb.js");
    productsDao = new DaoMongoDb("productsD10");
    break;

  default:
    const { default: DaoMongoDb2 } = await import("./DaoMongoDb.js");
    productsDao = new DaoMongoDb2("productsD10");
    break;
}

switch (config.MESSAGES_PERSISTANCE_MODE) {
  case "messages-mongodb":
    const { default: DaoMongoDb } = await import("./DaoMongoDb.js");
    messagesDao = new DaoMongoDb("messagesD10");
    break;

  default:
    const { default: DaoMongoDb2 } = await import("./DaoMongoDb.js");
    messagesDao = new DaoMongoDb2("messages10");
    break;
}

export { productsDao, messagesDao, mockProductsDao, mockUsersDao};
