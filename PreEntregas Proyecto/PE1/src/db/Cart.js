class Cart {
  constructor(id, timestamp, products) {
    if (!id) throw new Error("falta agregar el ID");
    if (!timestamp) throw new Error("falta agregar el dia inicial");
    if (!products) throw new Error('falta agregar el array de productos')
    this.id = id;
    this.timestamp = this.timestamp;
    this.products = products;
  }
}

module.exports = Cart;
