import Image from "../models/Image.js";

export default class ImagesService {
  #imagesDao;

  /**
   * @param {dao} imagesDao
   */

  constructor(imagesDao) {
    this.#imagesDao = imagesDao;
  }

  async getById(id) {
    return await this.#imagesDao.listById(id);
  }

  async getAllImages() {
    return await this.#imagesDao.listAll();
  }

  async saveImage({
    fieldname,
    originalname,
    encoding,
    mimetype,
    destination,
    filename,
    path,
    size,
  }) {
    const image = new Image(
      fieldname,
      originalname,
      encoding,
      mimetype,
      destination,
      filename,
      path,
      size
    );

    return await this.#imagesDao.saveObject(image.getImageData());
  }

  async updateImage(imageId, imageData) {
    const updated = await this.#imagesDao.updateObject(
      imageId,
      JSON.parse(JSON.stringify(imageData))
    );
    return updated;
  }

  async deleteImage(imageId) {
    await this.#imagesDao.deleteById(imageId);
  }
}
