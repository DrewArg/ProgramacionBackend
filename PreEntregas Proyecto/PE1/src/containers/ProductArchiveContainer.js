const fs = require("fs");
const Product = require("../db/Product.js");

class ProductArchiveContainer {
  constructor(path) {
    this.path = path;
    this.products = [];
  }

  _saveFile() {
    const textFile = JSON.stringify(this.products, null, 2);
    return fs.promises.writeFile(this.path, textFile);
  }

  _readFile() {
    return fs.promises.readFile(this.path, "utf-8")
      .then((text) => {
        const productsArray = JSON.parse(text);
        this.products = productsArray;
      });
  }

  async createProduct(productData) {
    const productId = new Date().getTime() * Math.random() * 100000;
    const timestamp = Date.now().toString();
    

    const product = new Product(
      productId,
      timestamp,
      productData.name,
      productData.description,
      productData.code,
      productData.thumbnail,
      productData.price,
      productData.stock
    );

    await this._readFile();
    this.products.push(product);
    await this._saveFile();
    return product;
  }

  async getAllProducts() {
    await this._readFile();
    return [...this.products];
  }

  async getById(productId) {
    await this._readFile();
    const index = this.products.findIndex((p) => p.id === parseInt(productId));

    if (index === -1) {
      return { error: "producto no encontrado" };
    } else {
      return this.products[index];
    }
  }

  async deleteById(productId) {
    await this._readFile();
    const index = this.products.findIndex((p) => p.id === parseInt(productId));
    if (index !== -1) {
      this.products.splice(index, 1);
      await this._saveFile();
      return { success: "producto eliminado" }
    } else {
      return { error: "producto no encontrado" };
    }
  }

  async deleteAll() {
    await this._readFile();
    this.products.splice(0, this.products.length);
    await this._saveFile();
  }

  async update(productData) {
    await this._readFile();

    const index = this.products.findIndex((p) => p.id === parseInt(productData.body.id));
    if (index === -1) {
      return { error: "producto no encontrado" };
    } else {
      if (!productData.body.name) throw new Error("falta agregar el nombre");
      if (!productData.body.description) throw new Error("falta agregar la descripción");
      if (!productData.body.code) throw new Error("falta agregar el código");
      if (!productData.body.thumbnail) throw new Error("falta agregar la imágen");
      if (!productData.body.price) throw new Error("falta agregar el precio");
      if (!productData.body.stock) throw new Error("falta agregar el stock");
      this.products[index].name = productData.body.name
      this.products[index].description = productData.body.description
      this.products[index].code = productData.body.code
      this.products[index].thumbnail = productData.body.thumbnail
      this.products[index].price = productData.body.price
      this.products[index].stock = productData.body.stock


      await this._saveFile();
    }
  }
}

module.exports = ProductArchiveContainer;
