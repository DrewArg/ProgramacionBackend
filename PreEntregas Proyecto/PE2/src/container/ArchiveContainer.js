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
      const objects = await promises.readFile(this.path, "utf-8");
      return JSON.parse(objects);
    } catch (error) {
      return { oops: `Error al listar todos: ${error}` };
    }
  }

  async saveObject(object) {
    const objects = await this.listAll();

    let newId = new Date().getTime() * Math.random() * 100000;

    const newObject = { ...object, id: newId };
    objects.push(newObject);

    try {
      await promises.writeFile(this.path, JSON.stringify(objects, null, 2));
      return newObject;
    } catch (error) {
      return { oops: `Error al guardar: ${error}` };
    }
  }

  async updateObject(object) {
    const objects = await this.listAll();
    const index = objects.findIndex((o) => o.id == object.id);

    if (index == -1) {
      return {
        oops: `Error al actualizar, no se encontró el id ${object.id} en el sistema.`,
      };
    } else {
      objects[index] = object;
      try {
        await promises.writeFile(this.path, JSON.stringify(objects, null, 2));
      } catch (error) {
        return {
          oops: `Error al actualizar: ${error}`,
        };
      }
    }
  }

  async deleteById(id) {
    const objects = await this.listAll();
    const index = objects.findIndex((o) => o.id == id);
    if (index == -1) {
      return { oops: `Error al borrar, no se encontró el id ${id}` };
    } else {
      const deleted = objects.splice(index, 1)[0];
      try {
        await promises.writeFile(this.path, JSON.stringify(objects, null, 2));

        return deleted;
      } catch (error) {
        return {
          oops: `Error al borrar: ${error}`,
        };
      }
    }
  }
}

export default ArchiveContainer;
