const fs = require("fs");
const Product = require("../db/Product.js");

class ArchiveContainer {
  constructor(path) {
    this.path = path;
    this.products = [];
  }

  _saveFile() {
    const textFile = JSON.stringify(this.products, null, 2);
    return fs.promises.writeFile(this.path, textFile);
  }

  _readFile() {
    return fs.promises.readFile(this.path, "utf-8").then((text) => {
      const productsArray = JSON.parse(text);
      this.products = productsArray;
    });
  }

  async save(productData) {
    const productId = Date.now();
    const product = new Product(
      productId,
      productData.title,
      productData.price,
      productData.thumbnail
    );

    await this._readFile();
    this.products.push(product);
    await this._saveFile();
    return product;
  }

  async getAll() {
    await this._readFile();
    return [...this.products];
  }

  async getById(productId) {
    await this._readFile();
    const index = this.products.findIndex((p) => p.id === productId);
    if (this.products[index] == null) {
      return null;
    } else {
      return this.products[index];
    }
  }

  async getRandomProduct() {
    await this._readFile();
    const index = Math.floor(Math.random() * this.products.length);
    return this.products[index];
  }

  async deleteById(productId) {
    await this._readFile();
    const index = this.products.findIndex((p) => p.id === productId);
    if (index !== -1) {
      this.products.splice(index, 1);
      await this._saveFile();
    }
  }

  async deleteAll() {
    await this._readFile();
    while (this.products.length > 0) {
      this.products.pop();
    }

    await this._saveFile();
  }

  async update(productData) {
    await this._readFile();

    const index = this.products.findIndex((p) => p.id === productData.id);
    if (this.products[index] == null) {
      return null;
    } else {
      this.products[index].title = productData.title;
      this.products[index].price = productData.price;
      this.products[index].thumbnail = productData.thumbnail;
      await this._saveFile();
    }
  }
}

module.exports = ArchiveContainer;
