import Image from "../models/Image.js";

export default class ImagesService {
    #imagesDao

    /**
    * @param {dao} imagesDao
    */

    constructor(imagesDao) {
        this.#imagesDao = imagesDao
    }

    async getById(id) {
        return await this.#imagesDao.listById(id)
    }

    async getAllImages() {
        return await this.#imagesDao.listAll()
    }

    //TODO ver si es totalmente necesario que una imagen tentga estos parametros, revisar el code de marian
    async saveImage({ title, description }) {
        const image = new Image(title, description)
        return await this.#imagesDao.saveObject(image.getImageData())
    }

    async updateImage(imageId, imageData) {
        const updated = await this.#imagesDao.updateObject(imageId, JSON.parse(JSON.stringify(imageData)))
        return updated
    }

    async deleteImage(imageId) {
        await this.#imagesDao.deleteById(imageId)
    }
}