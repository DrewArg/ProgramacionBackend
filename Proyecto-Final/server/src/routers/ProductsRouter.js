import { Router } from "express";
import ProductsControllers from '../controllers/ProductsControllers.js'
import { isAdmin } from "../middlewares/isAdmin.js";
import { authorize } from "../middlewares/jwt.js";

export default class ProductsRouter {
    #productsRouter

    /**
    * @param {ProductsControllers} productsController
    */
    constructor(productsController) {
        this.#productsRouter = Router()
            .get('/', (req, res, next) => productsController.getAll(req, res, next))
            .get('/:id?', (req, res, next) => productsController.getById(req, res, next))
            .post('/', authorize, isAdmin, (req, res, next) => productsController.saveProduct(req, res, next))
            .put('/:id?', authorize, isAdmin, (req, res, next) => productsController.updateProduct(req, res, next))
            .delete('/:id', authorize, isAdmin, (req, res, next) => productsController.deleteProduct(req, res, next))

    }

    get() { return this.#productsRouter }
}