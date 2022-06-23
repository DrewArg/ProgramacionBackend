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
      const obj =  await this.collection.doc(id).get();
      return asObj(obj)
    } catch (error) {
      return {oops: "Hubo un error intentando traer el documento por id desde firesbase"}
    }
  }

  async listAll() {
    const list = [];
    const snapshot = await this.collection.get();
    snapshot.forEach((doc) => {
      list.push(asObj(doc));
    });
    return list;
  }

  async saveObject(object) {
    const savedObject = await this.collection.add(object);
    return asObj(savedObject);
  }

  async updateObject(object) {
    const updatedObject = await this.collection.set({ object });
    return asObj(updatedObject);
  }

  async deleteById(id) {
    return await this.collection.doc(id).delete();
  }

  async deleteAll() {
    try {
      const docs = await this.listAll();
      const ids = docs.map((d) => d.id);
      const promises = ids.map((id) => this.deleteById(id));
      const result = await Promise.allSettled(promises);
      const errors = result.filter((r) => r.status == "rejected");

      if (errors.length > 0) {
        return { oops: `no se borró todo. Volver a intentarlo` };
      }
    } catch (error) {
      return { oops: `Error al borrar todos: ${error}` };
    }
  }
}

export default FirebaseContainer;
