import { promises as fs } from "fs";
class ArchiveContainer {
  constructor(path) {
    this.path = path;
  }

  async listById(id) {
    const objects = await this.listAll();
    const searched = objects.find((o) => o.id == id);
    return searched;
  }

  async listAll() {
    try {
      const objects = await fs.readFile(this.path, "utf-8");
      return JSON.parse(objects);
    } catch (error) {
      console.error(
        "Archive container --> error al lsitar todos los objetos. " + error
      );
    }
  }

  async saveObject(object) {
    const objects = await this.listAll();
    const newId = new Date().getTime() * Math.random() * 100000;
    const timestamp = new Date();

    const newObject = { ...object, id: newId, timestamp: timestamp };
    objects.push(newObject);

    try {
      await fs.writeFile(this.path, JSON.stringify(objects, null, 2));
      return newObject;
    } catch (error) {
      console.error("Archive container --> error guardando " + error);
    }
  }

  async updateObject(object) {
    const objects = await this.listAll();
    const index = objects.findIndex((o) => o.id == object.id);

    if (index == -1) {
      console.error(
        "Archive container --> error actualizando, no se encontró el id. "
      );
    } else {
      objects[index] = object;
      try {
        await fs.writeFile(this.path, JSON.stringify(objects, null, 2));
      } catch (error) {
        console.error("Archive container --> error actualizando. " + error);
      }
    }
  }

  async deleteById(id) {
    const objects = await this.listAll();
    const index = objects.findIndex((o) => o.id == id);
    if (index == -1) {
      console.error(
        "Archive container --> error borrando, no se encontró el id. "
      );
    } else {
      const deleted = objects.splice(index, 1)[0];
      try {
        await fs.writeFile(this.path, JSON.stringify(objects, null, 2));

        return deleted;
      } catch (error) {
        console.error("Archive container --> error borrando " + error);
      }
    }
  }
}

export default ArchiveContainer;
