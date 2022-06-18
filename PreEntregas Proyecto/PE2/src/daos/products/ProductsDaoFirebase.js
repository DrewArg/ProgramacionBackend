import FirebaseContainer from "../../container/FirebaseContainer.js";

class ProductsDaoFirebase extends FirebaseContainer {
  constructor() {
    super("products");
  }
}

export default ProductsDaoFirebase;
