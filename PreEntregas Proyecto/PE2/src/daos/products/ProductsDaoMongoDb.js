import MongoDbContainer from "../../container/MongoDbContainer.js";

class ProductsDaoMongoDb extends MongoDbContainer {
  constructor(collectionName) {
    super(collectionName);
  }
}

export default ProductsDaoMongoDb