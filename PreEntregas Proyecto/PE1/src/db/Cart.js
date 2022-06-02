class Cart {
  constructor(id, timestamp) {
    if (!id) throw new Error("falta agregar el ID");
    if (!timestamp) throw new Error("falta agregar el dia inicial");
    this.id = id;
    this.timestamp = this.timestamp;
    this.products = []
  }
}

module.exports = Cart;
