const Container = require("./Container.js");
const products = new Container();

products.save({
  id: 1,
  title: "Teléfono",
  price: 1200,
  thumbnail: "telefono.png"
});

products.save({
  id: 2,
  title: "Televisor",
  price: 5000,
  thumbnail: "televisor.png"
});

products.save({
  id: 3,
  title: "Computadora",
  price: 7800,
  thumbnail: "computadora.png"
});

products.save({
  id: 4,
  title: "Auriculares",
  price: 700,
  thumbnail: "auriculares.png"
});

console.log(`getAll: ${JSON.stringify(products.getAll())}`);
console.log(`getById (2): ${JSON.stringify(products.getById(2))}`);
products.deleteById(2);
console.log("");

console.log("deleteById (2)");
console.log(`getAll: ${JSON.stringify(products.getAll())}`);
console.log(`getById (2): ${JSON.stringify(products.getById(2))}`);
products.deleteAll();
console.log("");

console.log("deleteAll ");
console.log(`getAll: ${JSON.stringify(products.getAll())}`);
