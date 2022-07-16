import { persistanceMode } from "../config.js";

let mockUsersDao
let mockProductsDao
let productsDao
let messagesDao
let sessionsDao
let usersDao

switch (persistanceMode.mockUsers) {
  case "mockUsers-memory":
    const { default: MockApi } = await import("./MockApi.js");
    mockUsersDao = new MockApi();
    break;

  default:
    const { default: DaoMockMongo } = await import("./MockApi.js");
    mockUsersDao = new DaoMockMongo("mockUsers");
    break;
}

switch (persistanceMode.mockProducts) {
  case "mockProducts-memory":
    const { default: MockApi } = await import("./MockApi.js");
    mockProductsDao = new MockApi();
    break;

  default:
    const { default: DaoMockMongo } = await import("./MockApi.js");
    mockProductsDao = new DaoMockMongo("mockProducts");
    break;
}

switch (persistanceMode.products) {
  case "products-mongodb":
    const { default: DaoMongoDb } = await import("./DaoMongoDb.js");
    productsDao = new DaoMongoDb("products");
    break;

  default:
    const { default: DaoMongoDb2 } = await import("./DaoMongoDb.js");
    productsDao = new DaoMongoDb2("products");
    break;
}

switch (persistanceMode.messages) {
  case "messages-mongodb":
    const { default: DaoMongoDb } = await import("./DaoMongoDb.js");
    messagesDao = new DaoMongoDb("messages");
    break;

  default:
    const { default: DaoMongoDb2 } = await import("./DaoMongoDb.js");
    messagesDao = new DaoMongoDb2("messages");
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

switch (persistanceMode.users) {
  case "users-mongodb":
    const { default: DaoMongoDb } = await import("./DaoMongoDb.js");
    usersDao = new DaoMongoDb("users");
    break;

  default:
    const { default: DaoMongoDb2 } = await import("./DaoMongoDb.js");
    usersDao = new DaoMongoDb2("users");
    break;
}


export { productsDao, messagesDao, mockProductsDao, mockUsersDao, sessionsDao, usersDao };
