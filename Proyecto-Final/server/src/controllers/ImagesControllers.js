import ImagesService from "../service/ImagesService.js";
import { winston } from "./loggersControllers.js";

export default class ImagesControllers {
    #imagesService
    /**
    * @param {ImagesService} imagesService
    */

    constructor(imagesService) {
        this.#imagesService = imagesService
    }

    getById = async (req, res, next) => {
        try {
            const img = await this.#imagesService.getById(req.params.id)
            res.json(img)
        } catch (error) {
            winston.error(error)
            next(error)
        }
    }

    getAll = async (req, res, next) => {
        try {
            const images = await this.#imagesService.getAllImages()
            res.json(images)
        } catch (error) {
            winston.error(error)
            next(error)
        }
    }

    saveImage = async (req, res, next) => {
        try {
            const savedImage = await this.#imagesService.saveImage(req.body)
            res.status(201).json(savedImage)
        } catch (error) {
            winston.error(error)
            next(error)
        }
    }

    deleteImage = async(req,res,next)=>{
        try {
            const deletedImage = await this.#imagesService.deleteImage(req.params.id)
            res.json(deletedImage)
        } catch (error) {
            winston.error(error)
            next(error)
        }
    }
}