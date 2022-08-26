let productsDao, sessionsDao, usersDao, cartsDao

switch (process.env.DB_PRODUCTS) {
    case "products-mongodb":
        try {
            const { default: DaoMongoDb } = await import('./DaoMongoDb.js')
            productsDao = new DaoMongoDb('products')
        } catch (error) {
            winston.log('error', `daoIndex -->  ${error}`)
        }
        break;

    default:
        try {
            const { default: DaoMongoDb2 } = await import('./DaoMongoDb.js')
            productsDao = new DaoMongoDb2('products')
        } catch (error) {
            winston.log('error', `daoIndex -->  ${error}`)
        }
        break;
}

switch (process.env.DB_SESSIONS) {
    case "sessions-mongodb":
        try {
            const { default: DaoMongoDb } = await import('./DaoMongoDb.js')
            sessionsDao = new DaoMongoDb('sessions')
        } catch (error) {
            winston.log('error', `daoIndex -->  ${error}`)
        }
        break;

    default:
        try {
            const { default: DaoMongoDb2 } = await import('./DaoMongoDb.js')
            sessionsDao = new DaoMongoDb2('sessions')

        } catch (error) {
            winston.log('error', `daoIndex -->  ${error}`)
        }
        break;
}

switch (process.env.DB_USERS) {
    case "users-mongodb":
        try {
            const { default: DaoMongoDb } = await import('./DaoMongoDb.js')
            usersDao = new DaoMongoDb('users')
        } catch (error) {
            winston.log('error', `daoIndex -->  ${error}`)
        }
        break;

    default:
        try {
            const { default: DaoMongoDb2 } = await import('./DaoMongoDb.js')
            usersDao = new DaoMongoDb2('users')
        } catch (error) {
            winston.log('error', `daoIndex -->  ${error}`)
        }
        break;
}

switch (process.env.DB_CARTS) {
    case "carts-mongodb":
        try {
            const { default: DaoMongoDb } = await import('./DaoMongoDb.js')
            cartsDao = new DaoMongoDb('carts')

        } catch (error) {
            winston.log('error', `daoIndex -->  ${error}`)

        }
        break;

    default:
        try {
            const { default: DaoMongoDb2 } = await import('./DaoMongoDb.js')
            cartsDao = new DaoMongoDb2('carts')
        } catch (error) {
            winston.log('error', `daoIndex -->  ${error}`)
        }
        break;
}

export { productsDao, sessionsDao, usersDao, cartsDao }