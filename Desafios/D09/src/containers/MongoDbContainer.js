import config from "../config.js";
import { default as mongodb, ObjectId } from "mongodb";

const MongoClient = mongodb.MongoClient;
const client = new MongoClient(config.mongodb.uri, config.mongodb.client);
const dbName = "coderhouse";
const mongoDb = client.db(dbName);

class MongoDbContainer {
  constructor(collectionName) {
    this._connect();
    this.createCollection(collectionName);
    this.collection = collectionName;
  }

  async createCollection(collectionName) {
    try {
      await mongoDb.createCollection(collectionName);
    } catch (error) {
      console.error(
        "Colección ya existente, no se realizaron cambios. " + error
      );
    }
  }

  async _connect() {
    try {
      await client.connect();
    } catch (error) {
      console.error("Error en la conexión. " + error);
    }
  }

  async listById(id) {
    const prods = await this.listAll();
    const index = prods.findIndex((p) => p.id == id);
    if (index == -1) {
      console.error(
        "MongoDb container --> error buscando, no se encontró el id. "
      );
    } else {
      return prods[index];
    }
  }

  async listAll() {
    try {
      const prods = mongoDb.collection(this.collection).find();
      const prodsArray = [];

      await prods.forEach((prod) => {
        prodsArray.push(prod);
      });

      prodsArray.forEach((p) => {
        delete Object.assign(p, { ["id"]: p["_id"] })["_id"];
        p.id = "" + p.id + "";
      });

      return prodsArray;
    } catch (error) {
      console.error(
        "MongoDB Container --> Hubo un error listando todos. " + error
      );
    }
  }

  async saveObject(object) {
    try {
      const obj = await mongoDb.collection(this.collection).insertOne(object);
      return obj.insertedId;
    } catch (error) {
      console.error(
        "MongoDB Container --> Hubo un error guardando el objeto. " + error
      );
    }
  }

  async updateObject(object) {
    try {
      await mongoDb
        .collection(this.collection)
        .replaceOne({ _id: ObjectId(object.id) }, object);
    } catch (error) {
      console.error(
        "MongoDB Container --> Hubo un error actualizando el objeto. " + error
      );
    }
  }

  async deleteById(id) {
    try {
      await mongoDb
        .collection(this.collection)
        .deleteOne({ _id: ObjectId(id) });
    } catch (error) {
      console.error(
        "MongoDB Container --> Hubo un error borrando por id. " + error
      );
    }
  }

  async deleteAll() {
    try {
      await mongoDb.collection(this.collection).deleteMany({});
    } catch (error) {
      console.error(
        "MongoDB Container --> Hubo un error borrando todos. " + error
      );
    }
  }
}

export default MongoDbContainer;