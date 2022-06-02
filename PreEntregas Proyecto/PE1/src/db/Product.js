class Product {
  constructor(id, timestamp, name, description, code, thumbnail, price, stock) {
    if (!id) throw new Error("falta agregar el ID");
    if (!timestamp) throw new Error("falta agregar el dia inicial");
    if (!name) throw new Error("falta agregar el nombre");
    if (!description) throw new Error("falta agregar la descripción");
    if (!code) throw new Error("falta agregar el código");
    if (!thumbnail) throw new Error("falta agregar la imágen");
    if (!price) throw new Error("falta agregar el precio");
    if (!stock) throw new Error("falta agregar el stock");
    this.id = id;
    this.timestamp = this.timestamp;
    this.name = name;
    this.description = description;
    this.code = code;
    this.thumbnail = thumbnail;
    this.price = price;
    this.stock = stock;
  }
}

module.exports = Product;
