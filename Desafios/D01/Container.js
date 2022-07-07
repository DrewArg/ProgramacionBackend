const Product = require("./Product.js");
class Container {
  constructor() {
    this.container = [];
  }

  save(productData) {
    const product = new Product(
      productData.id,
      productData.title,
      productData.price,
      productData.thumbnail
    );
    this.container.push(product);
  }

  getById(id) {
    const index = this.products.findIndex((product) => product.id === id);
    if (this.products[index] == null) {
      return null;
    } else {
      return this.products[index];
    }
  }

  getAll() {
    return [...this.container];
  }

  deleteById(id) {
    const index = this.container.findIndex((product) => product.id === id);
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
