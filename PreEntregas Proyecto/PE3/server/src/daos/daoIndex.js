let productsDao
let sessionsDao
let usersDao

switch (process.env.DB_PRODUCTS) {
    case "products-mongodb":
        const { default: DaoMongoDb } = await import('./DaoMongoDb.js')
        productsDao = new DaoMongoDb('products')

        break;

    default:
        //TODO habria que agregar un segundo o un default metodo de guardado de datos
        const { default: DaoMongoDb2 } = await import('./DaoMongoDb.js')
        productsDao = new DaoMongoDb2('products')
        break;
}

switch (process.env.DB_SESSIONS) {
    case "sessions-mongodb":
        const { default: DaoMongoDb } = await import('./DaoMongoDb.js')
        sessionsDao = new DaoMongoDb('sessions')

        break;

    default:
        //TODO habria que agregar un segundo o un default metodo de guardado de datos
        const { default: DaoMongoDb2 } = await import('./DaoMongoDb.js')
        sessionsDao = new DaoMongoDb2('sessions')
        break;
}

switch (process.env.DB_USERS) {
    case "users-mongodb":
        const { default: DaoMongoDb } = await import('./DaoMongoDb.js')
        usersDao = new DaoMongoDb('users')

        break;

    default:
        //TODO habria que agregar un segundo o un default metodo de guardado de datos
        const { default: DaoMongoDb2 } = await import('./DaoMongoDb.js')
        usersDao = new DaoMongoDb2('users')
        break;
}

export { productsDao, sessionsDao, usersDao }