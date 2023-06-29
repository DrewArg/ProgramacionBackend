import { mongoConfig } from "../../config/config.js";
import { default as mongodb } from "mongodb";
import { winston } from "../../controllers/loggersControllers.js";
import { DB_NAME } from "../../config/config.js";

const MongoClient = mongodb.MongoClient;
const client = new MongoClient(
  mongoConfig.mongodb.url,
  mongoConfig.mongodb.client
);
const mongoDb = client.db(DB_NAME);

export default class DaoMongoAtlas {
  #collection;

  constructor(collectionName) {
    this._connect();
    this.createCollection(collectionName);
    this.#collection = collectionName;
  }

  async createCollection(collectionName) {
    try {
      await mongoDb.createCollection(collectionName);
    } catch (error) {
      winston.error(error)
      winston.log("info", `Colección ya existente, no se realizaron cambios`);
    }
  }

  async _connect() {
    try {
      await client.connect();
    } catch (error) {
      winston.log("error", `Error en la conexión a la mongo ${error}`);
    }
  }

  async listById(id) {
    if (!id) {
      winston.error("daoMongoAtlas --> el id es requerido");
      throw new Error("MISSING_REQUIRED_PARAM");
    }
    const objs = await this.listAll();

    const index = objs.findIndex((o) => o.id == id);
    if (index == -1) {
      winston.warn("daoMongoAtlas --> objeto no encontrado");
      throw new Error("NOT_FOUND");
    } else {
      winston.log(
        "debug",
        `MongoDb container --> se encontró el id y se devuelve`
      );
      return objs[index];
    }
  }

  async listAll() {
    const objs = mongoDb.collection(this.#collection).find();
    const objsArray = [];

    await objs.forEach((prod) => {
      objsArray.push(prod);
    });
    return objsArray;
  }

  async saveObject(object) {
    try {
      const obj = await mongoDb.collection(this.#collection).insertOne(object);
      return object.id;
    } catch (error) {
      winston.log("error", `MongoDbContainer --> ${error}`);
    }
  }

  async updateObject(objectId, objectData) {
    const obj = await this.listById(objectId);
    const updatedObj = { ...obj, ...objectData };
    delete updatedObj._id;

    await mongoDb
      .collection(this.#collection)
      .replaceOne({ id: objectId }, updatedObj);
    return updatedObj;
  }

  async deleteById(id) {
    if (!id) {
      winston.error("daoMongoAtlas --> el id es requerido");
      throw new Error("BAD_REQUEST");
    }

    const prod = await this.listById(id);

    await mongoDb.collection(this.#collection).deleteOne({ id: prod.id });
  }

  async deleteAll() {
    try {
      await mongoDb.collection(this.#collection).deleteMany({});
    } catch (error) {
      winston.log("error", `MongoDbContainer --> ${error}`);
    }
  }
}
