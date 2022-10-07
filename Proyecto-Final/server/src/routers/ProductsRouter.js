import { Router } from "express";
import ProductsControllers from '../controllers/ProductsControllers.js'

export default class ProductsRouter {
    #productsRouter

    /**
    * @param {ProductsControllers} productsController
    */
    constructor(productsController) {
        this.#productsRouter = Router()
            .get('/', (req, res, next) => productsController.getAll(req, res, next))
            .get('/:id?', (req, res, next) => productsController.getById(req, res, next))
            .post('/', (req, res, next) => productsController.saveProduct(req, res, next))
            .put('/:id?', (req, res, next) => productsController.updateProduct(req, res, next))
            .delete('/:id', (req, res, next) => productsController.deleteProduct(req, res, next))

    }

    get() { return this.#productsRouter }
}