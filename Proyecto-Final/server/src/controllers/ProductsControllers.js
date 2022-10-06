import ProductsService from "../service/ProductsService.js"

export default class ProductsControllers {
    #productsService
    /**
    * @param {ProductsService} productsService
    */
    constructor(productsService) {
        this.#productsService = productsService
    }


    getAll = async (req, res, next) => {
        try {
            const products = await this.#productsService.getAllProducts()
            res.json(products)
        } catch (error) {
            next(error)
        }
    }

    saveProduct = async (req, res, next) => {
        try {
            const savedProd = await this.#productsService.saveProduct(req.body)
            res.status(201).json(savedProd)
        } catch (error) {
            next(error)
        }
    }

    updateProduct = async (req, res, next) => {
        try {
            const updatedProduct = await this.#productsService.updateProduct(req.params.id, req.body)
            res.json(updatedProduct)
        } catch (error) {
            next(error)
        }
    }

    deleteProduct = async (req, res, next) => {
        try {
            const deletedProdut = await this.#productsService.deleteProduct(req.params.id)
            res.json(deletedProdut)
        } catch (error) {
            next(error)
        }
    }
}