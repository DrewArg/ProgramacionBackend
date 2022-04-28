class Container {
  constructor() {
    this.container = [];

  }

  save(object) {
    this.container.push(object);
  }

  getById(number) {
    if (this.container[number] == null) {
      return null;
    } else {
      return this.container[number];
    }

  }

  getAll() {
    return this.container;
  }

  deleteById(number) {
    if (this.container[number] != null) {
      this.container.splice(number, 1);
    }
  }

  deleteAll() {
    while (this.container.length > 0) {
      this.container.pop();
    }
  }
}

class Producto {
  constructor(id, title, price, thumbnail) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.thumbnail = thumbnail;
  }

  getId() {
    return this.id;
  }

  getTitle() {
    return this.title;
  }

  getPrice() {
    return this.price;
  }

  getThumbnail() {
    return this.thumbnail;
  }

}

const productos = new Container();

productos.save(new Producto(0, "Teléfono", 1200, "telefono.png"));
productos.save(new Producto(1, "Televisor", 5000, "televisor.png"));
productos.save(new Producto(2, "Computadora", 7800, "computadora.png"));
productos.save(new Producto(3, "Auriculares", 700, "auriculares.png"));

console.log(`getAll: ${JSON.stringify(productos.getAll())}`);
console.log(`getById (2): ${JSON.stringify(productos.getById(2))}`);
productos.deleteById(2);
console.log("");

console.log("deleteById (2)");
console.log(`getAll: ${JSON.stringify(productos.getAll())}`);
console.log(`getById (2): ${JSON.stringify(productos.getById(2))}`);
productos.deleteAll();
console.log("");

console.log("deleteAll ");
console.log(`getAll: ${JSON.stringify(productos.getAll())}`);
