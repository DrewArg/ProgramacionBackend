import admin from "firebase-admin";
import config from "../config.js";

admin.initializeApp({
  credential: admin.credential.cert(config.firebase),
});

const db = admin.firestore();

class FirebaseContainer {
  constructor(collectionName) {
    this.collection = db.collection(collectionName);
  }

  async listById(id) {}

  async listAll() {}

  async saveObject(object) {}

  async updateObject(object) {}

  async deleteById(id) {}

  async deleteAll() {
    //MODIFICAR ESTO

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

  async logout() {}
}

export default FirebaseContainer;
