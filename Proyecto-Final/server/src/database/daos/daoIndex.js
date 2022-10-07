import { winston } from '../../controllers/loggersControllers.js'
import { PERSISTANCE } from '../../config/config.js';
import DaoMongoAtlas from '../containers/DaoMongoAtlas.js'


let imagesDao, productsDao, cartsDao, ordersDao

//TODO agregar conexion a mongodb local para desarrollo

switch (PERSISTANCE) {
    case "mongoAtlas":
        try {
            imagesDao = new DaoMongoAtlas('images')
            productsDao = new DaoMongoAtlas('products')
            cartsDao = new DaoMongoAtlas('carts')
            ordersDao = new DaoMongoAtlas('orders')
        } catch (error) {
            winston.log('error', `daoIndex -->  ${error}`)
        }
        break;

    default:
        try {
            imagesDao = new DaoMongoAtlas('images')
            productsDao = new DaoMongoAtlas('products')
            cartsDao = new DaoMongoAtlas('carts')
            ordersDao = new DaoMongoAtlas('orders')
        } catch (error) {
            winston.log('error', `daoIndex -->  ${error}`)
        }
        break;
}

export { imagesDao, productsDao, cartsDao, ordersDao }