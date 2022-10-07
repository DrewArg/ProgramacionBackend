import { winston } from '../../controllers/loggersControllers.js'
import { PERSISTANCE } from '../../config/config.js';
import DaoMongoAtlas from '../containers/DaoMongoAtlas.js'


let productsDao, cartsDao, ordersDao

//TODO agregar conexion a mongodb local para desarrollo

switch (PERSISTANCE) {
    case "mongoAtlas":
        try {
            productsDao = new DaoMongoAtlas('products')
            cartsDao = new DaoMongoAtlas('carts')
            ordersDao = new DaoMongoAtlas('orders')
        } catch (error) {
            winston.log('error', `daoIndex -->  ${error}`)
        }
        break;

    default:
        try {
            productsDao = new DaoMongoAtlas('products')
            cartsDao = new DaoMongoAtlas('carts')
            ordersDao = new DaoMongoAtlas('orders')
        } catch (error) {
            winston.log('error', `daoIndex -->  ${error}`)
        }
        break;
}

export { productsDao, cartsDao, ordersDao }