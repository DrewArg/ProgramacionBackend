import MongoDbContainer from "../container/MongoDbContainer.js";

class DaoMongoDb extends MongoDbContainer {
  constructor(collectionName) {
    super(collectionName);
  }
}

export default DaoMongoDb