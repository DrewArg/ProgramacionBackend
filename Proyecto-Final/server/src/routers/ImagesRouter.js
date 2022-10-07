import { Router } from 'express'
import ImagesControllers from '../controllers/ImagesControllers.js'

export default class ImagesRouter {
    #imagesRouter

    /**
    * @param {ImagesControllers} imagesControllers
    */

    constructor(imagesControllers) {
        this.#imagesRouter = Router()
            .post('/', (req, res, next) => imagesControllers.saveImage(req, res, next))
    }

    get() { return this.#imagesRouter }
}