import ProductsRouter from "./ProductsRouter.js";
import productsControllers from '../controllers/index.js'

const productsRouter = new ProductsRouter(productsControllers)

export default productsRouter.get()