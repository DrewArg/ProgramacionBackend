import { winston } from '../../controllers/loggersControllers.js'
import { PERSISTANCE } from '../../config/config.js';
import DaoMongoAtlas from '../containers/DaoMongoAtlas.js'


let productsDao

switch (PERSISTANCE) {
    case "mongoAtlas":
        try {
            productsDao = new DaoMongoAtlas('products')
        } catch (error) {
            winston.log('error', `daoIndex -->  ${error}`)
        }
        break;

    default:
        try {
            productsDao = new DaoMongoAtlas('products')
        } catch (error) {
            winston.log('error', `daoIndex -->  ${error}`)
        }
        break;
}

export { productsDao }