import admin from "firebase-admin";
import config from "../config.js";

admin.initializeApp({
  credential: admin.credential.cert(config.firebase.serviceAccount),
});

const db = admin.firestore();
const asObj = (doc) => ({ id: doc.id, ...doc.data() });

class FirebaseContainer {
  constructor(collectionName) {
    this.collection = db.collection(collectionName);
  }

  async listById(id) {
    try {
      const obj = await this.collection.doc(id).get();
      return asObj(obj);
    } catch (error) {
      console.error("Hubo un error listando el documento por id. " + error);
    }
  }

  async listAll() {
    try {
      const list = [];
      const snapshot = await this.collection.get();
      snapshot.forEach((doc) => {
        list.push(asObj(doc));
      });
      return list;
    } catch (error) {
      console.error("Hubo un error listando todos los objetos. " + error);
    }
  }

  async saveObject(object) {
    console.log(object.body);
    try {
      await this.collection.add(object.body);
    } catch (error) {
      console.error("Hubo un error guardando el objeto. " + error);
    }
  }

  async updateObject(object) {
    try {
      await this.collection.doc(object.id).update(object);
    } catch (error) {
      console.error("Hubo un error actualizando el objeto. " + error);
    }
  }

  async deleteById(id) {
    try {
      return await this.collection.doc(id).delete();
    } catch (error) {
      console.error("Hubo un error borrando el objeto. " + error);
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
        console.error(`no se borró todo. Volver a intentarlo`);
      }
    } catch (error) {
      console.error(`Hubo un error borrando todos los elementos: ${error}`);
    }
  }
}

export default FirebaseContainer;
