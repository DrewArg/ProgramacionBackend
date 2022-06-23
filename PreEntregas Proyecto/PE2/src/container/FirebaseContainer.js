import admin from "firebase-admin";
import config from "../config.js";
import fs from "fs";

const serviceAccount = JSON.parse(fs.readFileSync(config.firebase, "utf-8"));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
const asObj = (doc) => ({ id: doc.id, ...doc.data() });

class FirebaseContainer {
  constructor(collectionName) {
    this.collection = db.collection(collectionName);
  }

  async listById(id) {
    return await db.this.collection.doc(id).get();
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
    const savedObject = await db.this.collection.add(object);
    console.log(savedObject.id);
    return asObj(savedObject);
  }

  async updateObject(object) {
    const updatedObject = await db.this.collection.set({ object });
    return asObj(updatedObject);
  }

  async deleteById(id) {
    return await db.this.collection.doc(id).delete();
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
