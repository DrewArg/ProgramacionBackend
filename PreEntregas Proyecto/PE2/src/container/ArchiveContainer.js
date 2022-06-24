import { promises as fs } from "fs";

class ArchiveContainer {
  constructor(path) {
    this.path = path;
    this.objects = [];
  }

  async _readFile() {
    // console.log("reading: " + this.path);
    try {
      return fs.readFile(this.path, "utf-8").then((text) => {
        const objectsArray = JSON.parse(text);
        this.objects = objectsArray;
      });
    } catch (error) {
      console.error("Archive container --> Error en la lectura del json." + error);
    }
  }

  async _saveFile() {
    try {
      const textFile = JSON.stringify(this.objects, null, 2);
      return fs.writeFile(this.path, textFile);
    } catch (error) {
      console.error("Archive container --> Error en el gaurdado del json. " + error);
    }
  }

  async listById(id) {
    try {
      await this._readFile();
      console.log(id);
      const index = this.objects.findIndex((o) => o.id === parseInt(id));

      if (index === -1) {
        console.error("Archive container --> El objeto no fue encontrado");
      } else {
        return this.objects[index];
      }
    } catch (error) {
      console.error("Archive container --> Error leyendo el archivo. " + error);
    }
  }

  async listAll() {
    try {
      await this._readFile();
      return [...this.objects];
    } catch (error) {
      console.error(
        "Archive container --> error al lsitar todos los objetos. " + error
      );
    }
  }

  async saveObject(object) {
    const newId = new Date().getTime() * Math.random() * 100000;
    const timestamp = new Date();

    const newObject = { ...object, id: newId, timestamp: timestamp };

    console.log("object: " + { newObject });
    try {
      await this._readFile();
      this.objects.push(newObject);
      await this._saveFile();
      return newObject;
    } catch (error) {
      console.error(
        "Archive container --> error guardando o leyendo el json " + error
      );
    }
  }

  async updateObject(object) {
    try {
      await this._readFile();
      const index = this.objects.findIndex((o) => o.id == object.id);

      if (index == -1) {
        console.error(
          "Archive container --> error actualizando, no se encontró el id. "
        );
      } else {
        try {
          this.objects[index] = object;
          await this._saveFile();
        } catch (error) {
          console.error(
            "Archive container --> error actualizando o guardando. " + error
          );
        }
      }
    } catch (error) {
      console.error("Archive container --> Error leyendo el archivo. " + error);
    }
  }

  async deleteById(id) {
    await this._readFile();
    const index = this.objects.findIndex((o) => o.id == id);
    if (index == -1) {
      console.error(
        "Archive container --> error borrando, no se encontró el id. "
      );
    } else {
      this.objects.splice(index, 1)[0];
      try {
        await this._saveFile();
      } catch (error) {
        console.error("Archive container --> error borrando " + error);
      }
    }
  }
}

export default ArchiveContainer;
