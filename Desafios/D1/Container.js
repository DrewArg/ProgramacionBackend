const Product = require("./Product.js");
class Container {
  constructor() {
    this.container = [];
  }

  save(productData) {
    const product = new Product(productData.id, productData.title, productData.price, productData.thumbnail)
    this.container.push(product);
  }

  getById(number) {
    if (this.container[number] == null) {
      return null;
    } else {
      return this.container[number];
    }
  }

  getAll() {
    //devuelvo una copia del arrray y no todo para mayor seguridad
    //y ademas lo guardo en un nuevo array con los []
    return [...this.container];
  }

  deleteById(id) {
    const index = this.container.findIndex(product => product.id === id)
    if (index !== -1) {
      this.container.splice(index, 1);
    }
  }

  deleteAll() {
    while (this.container.length > 0) {
      this.container.pop();
    }
  }
}

module.exports = Container;