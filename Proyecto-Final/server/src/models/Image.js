import { winston } from "../controllers/loggersControllers.js";
import Id from "./Id.js";

export default class Image {
  #id;
  #title;
  #description;
  #url;

  /**
   * @param {string} title
   * @param {string} description
   */
  constructor(title, description) {
    this.#setTitle(title);
    this.#setDescription(description);
    this.#id = new Id().getNewId();
  }

  #setTitle(title) {
    winston.error("image -->el title es requerido");
    if (!title) throw new Error('MISSING_REQUIRED_PARAM');
    this.#title = title;
  }

  #setDescription(description) {
    winston.error("image -->la description es requerido");
    if (!description) throw new Error('MISSING_REQUIRED_PARAM');
    this.#description = description;
  }

  /**
   * @param {string} url
   */
  set url(url) {
    winston.error('image --> la url es requerida')
    if (!url) throw new Error('MISSING_REQUIRED_PARAM');
    this.#url = url;
  }

  getId() {
    return this.#id;
  }
  getTitle() {
    return this.#title;
  }
  getDescription() {
    return this.#description;
  }
  getUrl() {
    return this.#url;
  }

  getImageData() {
    return JSON.parse(
      JSON.stringify(
        Object.freeze({
          id: this.#id,
          title: this.#title,
          description: this.#description,
          url: this.#url,
        })
      )
    );
  }
}
