const fs = require("fs");

class CartArchiveContainer {
  constructor(path) {
    this.path = path;
    this.cartId = null;
  }

  _saveFile() {
    const textFile = JSON.stringify(this.cartId);
    return fs.promises.writeFile(this.path, textFile);
  }

  _readFile() {
    return fs.promises.readFile(this.path, "utf-8").then((text) => {
      const currCartId = JSON.parse(text);
      this.cartId = currCartId;
    });
  }

  async getCartId() {
    await this._readFile();
    return this.cartId;
  }

  async changeCartId(cartId) {
    console.log("archivex");
    await this._readFile();
    this.cartId = cartId;
    await this._saveFile();
  }
}

module.exports = CartArchiveContainer;
