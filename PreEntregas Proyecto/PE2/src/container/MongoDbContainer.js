import db from "mongodb";
import config from "../config.js";
import { default as mongodb } from "mongodb";

const MongoClient = mongodb.MongoClient;
const client = new MongoClient(config.mongodb.uri, config.mongodb.client);

class MongoDbContainer {
  constructor(collectionName) {
   this.collectionName = this._connect(collectionName);
  }

  async _connect(collectionName) {
    await client.connect().then(console.log("aca"));
    const mongoDb = client.db("coderhouse");
    return mongoDb.collection(collectionName);
  }

  async listById(id) {
    try {
      return await db.this.collectionName.find({ _id: ObjectId(id) });
    } catch (error) {
      console.error(
        "MongoDB Container --> Hubo un error listando por id. " + error
      );
    }
  }

  async listAll() {
    try {
      const prods = await db.this.collectionName.find();
      return prods;
    } catch (error) {
      console.error(
        "MongoDB Container --> Hubo un error listando todos. " + error
      );
    }
  }

  async saveObject(object) {
    try {
      await db.this.collection.insertOne(object);
    } catch (error) {
      console.error(
        "MongoDB Container --> Hubo un error guardando el objeto. " + error
      );
    }
  }

  async updateObject(object) {
    try {
      await db.this.collection.update(
        { _id: object._id },
        { $set: { object } }
      );
    } catch (error) {
      console.error(
        "MongoDB Container --> Hubo un error actualizando el objeto. " + error
      );
    }
  }

  async deleteById(id) {
    try {
      await db.this.collection.deleteOne({ _id: ObjectId(id) });
    } catch (error) {
      console.error(
        "MongoDB Container --> Hubo un error borrando por id. " + error
      );
    }
  }

  async deleteAll() {
    try {
      await db.this.collection.deleteMany({});
    } catch (error) {
      console.error(
        "MongoDB Container --> Hubo un error borrando todos. " + error
      );
    }
  }
}

export default MongoDbContainer;
