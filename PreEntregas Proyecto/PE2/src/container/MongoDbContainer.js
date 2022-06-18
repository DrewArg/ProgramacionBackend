import mongoose from "mongoose";
import config from "../config.js";

await mongoose.connect(config.mongodb.cnxStr, config.mongodb.options);

//ver de no usar mongoose
class MongoDbContainer {
  constructor(collectionName, scheme) {
    this.coleccion = mongoose.model(collectionName, scheme);
  }

  async listById(id) {}

  async listAll() {}

  async saveObject(object) {}

  async updateObject(object) {}

  async deleteById(id) {}

  async deleteAll() {}
}

export default MongoDbContainer;
