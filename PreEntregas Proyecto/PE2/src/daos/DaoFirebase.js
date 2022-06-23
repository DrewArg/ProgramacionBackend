import FirebaseContainer from "../container/FirebaseContainer.js";

class DaoFirebase extends FirebaseContainer {
  constructor(collectionName) {
    super(collectionName);
  }
}

export default DaoFirebase;
