import MongoDbContainer from "../../container/MongoDbContainer.js";

class ProductsDaoMongoDb extends MongoDbContainer {
  constructor() {
    super("products", {
      name: { String, required: true },
      description: { String, required: true },
      code: { String, required: true },
      thumbnail: { String, required: true },
      price: { Number, required: true },
      stock: { Number, required: true },
    });
  }
}

export default ProductsDaoMongoDb