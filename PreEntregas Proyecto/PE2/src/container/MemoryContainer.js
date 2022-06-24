class MemoryContainer {
  constructor() {
    this.elements = [];
  }

  listById(id) {
    const element = this.elements.find((e) => e.id == id);
    if (!element) {
      console.error(`El id ${id} no se encuentra en el sistema`);
    } else {
      return element;
    }
  }

  listAll() {
    return [...this.elements];
  }

  saveObject(object) {
    let newId = new Date().getTime() * Math.random() * 100000;

    const newObject = { ...object, id: newId };
    this.elements.push(newObject);
    return newObject;
  }

  updateObject(object) {
    const index = this.elements.findIndex((o) => o.id == object.id);

    if (index == -1) {
      console.error(
        `Error al actualizar, no se encontró el id ${object.id} en el sistema`
      );
    } else {
      this.elements[index] = object;
      return object;
    }
  }

  deleteById(id) {
    const index = objects.findIndex((o) => o.id == id);
    if (index == -1) {
      console.error(`Error al borrar, no se encontró el id ${id}`);
    } else {
      return this.elements.splice(index, 1)[0];
    }
  }

  deleteAll() {
    this.elements = [];
  }
}

export default MemoryContainer;
