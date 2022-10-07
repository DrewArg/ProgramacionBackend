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
    if (!title) {
      winston.error("image -->el title es requerido");
      throw new Error('MISSING_REQUIRED_PARAM');
    }
    this.#title = title;
  }

  #setDescription(description) {
    if (!description){
      winston.error("image -->la description es requerido");
      throw new Error('MISSING_REQUIRED_PARAM');
    } 
    this.#description = description;
  }

  /**
   * @param {string} url
   */
  set url(url) {
    if (!url){
      winston.error('image --> la url es requerida')
      throw new Error('MISSING_REQUIRED_PARAM');
    } 
      
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
