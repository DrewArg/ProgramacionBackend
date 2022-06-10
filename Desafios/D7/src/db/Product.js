class Product {
  constructor(id, title, price, thumbnail) {
    if (!id) throw new Error("falta agregar el ID");
    if (!title) throw new Error("falta agregar el título");
    if (!price) throw new Error("falta agregar el precio");
    if (!thumbnail) throw new Error("falta agregar la imagen");
    this.id = id;
    this.title = title;
    this.price = price;
    this.thumbnail = thumbnail;
  }
}

export default Product ;
