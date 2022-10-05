import productService from "../service/index.js";
import ProductsControllers from "./ProductsControllers.js";

const productsController = new ProductsControllers(productService)

export default productsController