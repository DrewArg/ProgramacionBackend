import admin from "firebase-admin";
import config from "../config.js";

admin.initializeApp({
  credential: admin.credential.cert(config.firebase.serviceAccount),
});

const db = admin.firestore();

class FirebaseContainer {
  constructor(collectionName) {
    this.collection = db.collection(collectionName);
  }

  async listById(id) {
    try {
      const obj = await this.collection.doc(id).get();
      const asObj = (doc) => ({ id: doc.id, ...doc.data() });
      return asObj(obj);
    } catch (error) {
      console.error(
        "Firebase container --> Hubo un error listando el documento por id. " +
          error
      );
    }
  }

  async listAll() {
    try {
      const asObj = (doc) => ({ id: doc.id, ...doc.data() });
      const list = [];
      const snapshot = await this.collection.get();
      snapshot.forEach((doc) => {
        list.push(asObj(doc));
      });

      list.forEach((i) => {
        i.id = '' + i.id + '';
      });
      return list;
    } catch (error) {
      console.error(
        "Firebase container --> Hubo un error listando todos los objetos. " +
          error
      );
    }
  }

  async saveObject(object) {
    try {
      const obj = await this.collection.add(object);
      return obj._path.segments[1];
    } catch (error) {
      console.error(
        "Firebase container --> Hubo un error guardando el objeto. " + error
      );
    }
  }

  async updateObject(object) {
    try {
      await this.collection.doc(object.id).update(object);
    } catch (error) {
      console.error(
        "Firebase container --> Hubo un error actualizando el objeto. " + error
      );
    }
  }

  async deleteById(id) {
    try {
      return await this.collection.doc(id).delete();
    } catch (error) {
      console.error(
        "Firebase container --> Hubo un error borrando el objeto. " + error
      );
    }
  }

  async deleteAll() {
    try {
      const docs = await this.listAll();
      const ids = docs.map((d) => d.id);
      const promises = ids.map((id) => this.deleteById(id));
      const result = await Promise.allSettled(promises);
      const errors = result.filter((r) => r.status == "rejected");

      if (errors.length > 0) {
        console.error(
          `Firebase container --> no se borró todo. Volver a intentarlo`
        );
      }
    } catch (error) {
      console.error(
        `Firebase container --> Hubo un error borrando todos los elementos: ${error}`
      );
    }
  }
}

export default FirebaseContainer;
