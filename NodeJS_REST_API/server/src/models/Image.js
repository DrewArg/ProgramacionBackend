import { winston } from "../controllers/loggersControllers.js";
import Id from "./Id.js";

export default class Image {
  #id;
  #fieldName;
  #originalName;
  #encoding;
  #mimetype;
  #destination;
  #fileName;
  #path;
  #size;

  /**
   * @param {string} fieldName
   * @param {string} originalName
   * @param {string} encoding
   * @param {string} mimetype
   * @param {string} destination
   * @param {string} fileName
   * @param {string} path
   * @param {string} size
   */
  constructor(
    fieldName,
    originalName,
    encoding,
    mimetype,
    destination,
    fileName,
    path,
    size
  ) {
    this.#setFieldName(fieldName);
    this.#setOriginalName(originalName);
    this.#setEncoding(encoding);
    this.#setMimeType(mimetype);
    this.#setDestination(destination);
    this.#setFileName(fileName);
    this.#setPath(path);
    this.#setSize(size);
    this.#id = new Id().getNewId();
  }

  /**
   * @param {string} fieldName
   */
  #setFieldName(fieldName) {
    if (!fieldName) {
      winston.error("image --> el fieldName es requerida");
      throw new Error("MISSING_REQUIRED_PARAM");
    }
    this.#fieldName = fieldName;
  }
  /**
   * @param {string} description
   */
  #setOriginalName(originalName) {
    if (!originalName) {
      winston.error("image --> la originalName es requerida");
      throw new Error("MISSING_REQUIRED_PARAM");
    }
    this.#originalName = originalName;
  }
  /**
   * @param {string} encoding
   */
  #setEncoding(encoding) {
    if (!encoding) {
      winston.error("image --> la encoding es requerida");
      throw new Error("MISSING_REQUIRED_PARAM");
    }
    this.#encoding = encoding;
  }
  /**
   * @param {string} mimetype
   */
  #setMimeType(mimetype) {
    if (!mimetype) {
      winston.error("image --> la mimetype es requerida");
      throw new Error("MISSING_REQUIRED_PARAM");
    }
    this.#mimetype = mimetype;
  }
  /**
   * @param {string} destination
   */
  #setDestination(destination) {
    if (!destination) {
      winston.error("image --> la destination es requerida");
      throw new Error("MISSING_REQUIRED_PARAM");
    }
    this.#destination = destination;
  }
  /**
   * @param {string} fileName
   */
  #setFileName(fileName) {
    if (!fileName) {
      winston.error("image --> la fileName es requerida");
      throw new Error("MISSING_REQUIRED_PARAM");
    }
    this.#fileName = fileName;
  }
  /**
   * @param {string} path
   */
  #setPath(path) {
    if (!path) {
      winston.error("image --> la path es requerida");
      throw new Error("MISSING_REQUIRED_PARAM");
    }
    this.#path = path;
  }
  /**
   * @param {number} size
   */
  #setSize(size) {
    if (!size) {
      winston.error("image --> la size es requerida");
      throw new Error("MISSING_REQUIRED_PARAM");
    }
    this.#size = size;
  }

  getFieldName() {
    return this.#fieldName;
  }
  getOriginalName() {
    return this.#originalName;
  }
  getEncoding() {
    return this.#encoding;
  }
  getMimeType() {
    return this.#mimetype;
  }
  getFileName() {
    return this.#fileName;
  }

  getDestination() {
    return this.#destination;
  }

  getPath() {
    return this.#path;
  }

  getSize() {
    return this.#size;
  }

  getImageData() {
    return JSON.parse(
      JSON.stringify(
        Object.freeze({
          id: this.#id,
          mimetype: this.#mimetype,
          encoding: this.#encoding,
          fieldName: this.#fieldName,
          originalName: this.#originalName,
          fileName: this.#fileName,
          destination: this.#destination,
          path: this.#path,
          size: this.#size,
        })
      )
    );
  }
}
