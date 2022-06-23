import { db, ObjectId, ObjectID } from "mongodb";
import config from "../config.js";

await mongoose.connect(config.mongodb.cnxStr, config.mongodb.options);

//ver de no usar mongoose
class MongoDbContainer {
  constructor(collectionName) {
    this.collection = collectionName;
  }

  //62b46aceff1abb66102f4793

  async listById(id) {
    return await db.this.collection.find({ _id: ObjectId(id) });
  }

  async listAll() {
    return await db.this.collection.find();
  }

  async saveObject(object) {
    await db.this.collection.insertOne(object);
  }

  async updateObject(object) {
    await db.this.collection.update({ _id: object._id }, { $set: { object } });
  }

  async deleteById(id) {
    await db.this.collection.deleteOne({ _id: ObjectId(id) });
  }

  async deleteAll() {
    await db.this.collection.deleteMany({});
  }
}

export default MongoDbContainer;
