import { persistanceMode } from "../config.js";

let productsDao
let mockProductsDao
let mockUsersDao
let messagesDao
let sessionsDao

switch (persistanceMode.mockUsers) {
  case "mockUsers-memory":
    const { default: MockApi } = await import("./MockApi.js");
    mockUsersDao = new MockApi();
    break;

  default:
    const { default: DaoMockMongo } = await import("./MockApi.js");
    mockUsersDao = new DaoMockMongo("mockUsersD9");
    break;
}

switch (persistanceMode.mockProducts) {
  case "mockProducts-memory":
    const { default: MockApi } = await import("./MockApi.js");
    mockProductsDao = new MockApi();
    break;

  default:
    const { default: DaoMockMongo } = await import("./MockApi.js");
    mockProductsDao = new DaoMockMongo("mockProductsD9");
    break;
}

switch (persistanceMode.products) {
  case "products-mongodb":
    const { default: DaoMongoDb } = await import("./DaoMongoDb.js");
    productsDao = new DaoMongoDb("productsD10");
    break;

  default:
    const { default: DaoMongoDb2 } = await import("./DaoMongoDb.js");
    productsDao = new DaoMongoDb2("productsD10");
    break;
}

switch (persistanceMode.messages) {
  case "messages-mongodb":
    const { default: DaoMongoDb } = await import("./DaoMongoDb.js");
    messagesDao = new DaoMongoDb("messagesD10");
    break;

  default:
    const { default: DaoMongoDb2 } = await import("./DaoMongoDb.js");
    messagesDao = new DaoMongoDb2("messages10");
    break;
}

switch (persistanceMode.sessions) {
  case "sessions-mongodb":
    const { default: DaoMongoDb } = await import("./DaoMongoDb.js");
    sessionsDao = new DaoMongoDb("sessions");
    break;

  default:
    const { default: DaoMongoDb2 } = await import("./DaoMongoDb.js");
    sessionsDao = new DaoMongoDb2("sessions");
    break;
}

export { productsDao, messagesDao, mockProductsDao, mockUsersDao, sessionsDao };
