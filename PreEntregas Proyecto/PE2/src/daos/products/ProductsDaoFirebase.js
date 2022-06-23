import FirebaseContainer from "../../container/FirebaseContainer.js";

class ProductsDaoFirebase extends FirebaseContainer {
  constructor(collectionName) {
    super(collectionName);
  }
}

export default ProductsDaoFirebase;
