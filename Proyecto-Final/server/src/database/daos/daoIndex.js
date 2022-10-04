import { PERSISTANCE } from '../../config/config.js';

let productsDao

switch (PERSISTANCE) {
    case "mongoAtlas":
        try {
            const { default: DaoMongoDb } = await import('../containers/DaoMongoAtlas.js')
            productsDao = new DaoMongoDb('products')
        } catch (error) {
            winston.log('error', `daoIndex -->  ${error}`)
        }
        break;

    default:
        try {
            const { default: DaoMongoDb2 } = await import('../containers/DaoMongoAtlas.js')
            productsDao = new DaoMongoDb2('products')
        } catch (error) {
            winston.log('error', `daoIndex -->  ${error}`)
        }
        break;
}

export { productsDao }