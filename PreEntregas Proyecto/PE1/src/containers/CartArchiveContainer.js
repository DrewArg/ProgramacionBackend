const fs = require("fs");
const Cart = require("../db/Cart.js");

class CartArchiveContainer {
  constructor(path) {
    this.path = path;
    this.carts = [];
  }

  _saveFile() {
    const textFile = JSON.stringify(this.carts, null, 2);
    return fs.promises.writeFile(this.path, textFile);
  }

  _readFile() {
    return fs.promises.readFile(this.path, "utf-8").then((text) => {
      const cartsArray = JSON.parse(text);
      this.carts = cartsArray;
    });
  }

  async createCart(cartData) {
    const cartId = new Date().getTime() * Math.random() * 100000;
    const timestamp = new Date();
    const newArray = [];
    newArray.push(cartData);
    const cart = new Cart(cartId, timestamp, newArray);
    console.log({ cart });
    await this._readFile();
    this.carts.push(cart);
    await this._saveFile();
    return cartId;
  }

  async deleteById(cartId) {
    await this._readFile();
    const index = this.carts.findIndex((c) => c.id === cartId);
    if (index === -1) {
      return { error: "carrito no encontrado" };
    } else {
      const cartProducts = this.carts[index].products;
      cartProducts.splice(0, cartProducts.length);
      this.carts.splice(index, 1);
      await this._saveFile();
      return {
        response: `el carrito ${cartId} fue vaciado y eliminado correctamente.`,
      };
    }
  }

  async getCartsIds() {
    await this._readFile();
    const cartsIds = this.carts.map((c) => c.id);
    return cartsIds;
  }

  async getAllProducts(cartId) {
    await this._readFile();
    const index = this.carts.findIndex((c) => parseInt(c.id) === parseInt(cartId));
    if (index === -1) {
      return { error: "carrito no encontrado" };
    } else {
      return this.carts[index].products;
    }
  }

  async addProduct(product, cartId) {
    await this._readFile();
    const index = this.carts.findIndex(
      (c) => parseInt(c.id) === parseInt(cartId)
    );
    if (index === -1) {
      return { error: "carrito no encontrado" };
    } else {
      this.carts[index].products.push(product);
      await this._saveFile();
    }
  }

  async removeProduct(productId, cartId) {
    await this._readFile();

    const index = this.carts.findIndex((c) => parseInt(c.id) === parseInt(cartId));
    if (index === -1) {
      return { error: "carrito no encontrado" };
    } else {
      const productsInCart = await this.getAllProducts(cartId);

      const productIndex = productsInCart.findIndex((p) => parseInt(p.id) === parseInt(productId));

      if (productIndex === -1) {
        return { error: "producto no encontrado" };
      } else {
        console.log("producto");
        console.log(productIndex);
        console.log("prods: " + {productsInCart});
        productsInCart.splice(productIndex, 1);
        await this._saveFile();
        return {
          respose: `el producto ${productId} ha sido elminado del carrito correctamente`,
        };
      }
    }
  }
}

module.exports = CartArchiveContainer;
