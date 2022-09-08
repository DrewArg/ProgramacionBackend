let mockUsersDao
let mockProductsDao
let productsDao
let messagesDao
let sessionsDao
let usersDao

switch (process.env.DB_MOCKUSERS) {
  case "mockUsers-memory":
    const { default: MockApi } = await import("./MockApi.js");
    mockUsersDao = new MockApi();
    break;

  default:
    const { default: DaoMockMongo } = await import("./MockApi.js");
    mockUsersDao = new DaoMockMongo("mockUsers");
    break;
}

switch (process.env.DB_MOCKPRODUCTS) {
  case "mockProducts-memory":
    const { default: MockApi } = await import("./MockApi.js");
    mockProductsDao = new MockApi();
    break;

  default:
    const { default: DaoMockMongo } = await import("./MockApi.js");
    mockProductsDao = new DaoMockMongo("mockProducts");
    break;
}

switch (process.env.DB_PRODUCTS) {
  case "products-mongodb":
    const { default: DaoMongoDb } = await import("./DaoMongoDb.js");
    productsDao = new DaoMongoDb("products");
    break;

  default:
    const { default: DaoMongoDb2 } = await import("./DaoMongoDb.js");
    productsDao = new DaoMongoDb2("products");
    break;
}

switch (process.env.DB_MESSAGES) {
  case "messages-mongodb":
    const { default: DaoMongoDb } = await import("./DaoMongoDb.js");
    messagesDao = new DaoMongoDb("messages");
    break;

  default:
    const { default: DaoMongoDb2 } = await import("./DaoMongoDb.js");
    messagesDao = new DaoMongoDb2("messages");
    break;
}

switch (process.env.DB_SESSIONS) {
  case "sessions-mongodb":
    const { default: DaoMongoDb } = await import("./DaoMongoDb.js");
    sessionsDao = new DaoMongoDb("sessions");
    break;

  default:
    const { default: DaoMongoDb2 } = await import("./DaoMongoDb.js");
    sessionsDao = new DaoMongoDb2("sessions");
    break;
}

switch (process.env.DB_USERS) {
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
