const ProductArchiveContainer = require("../containers/ProductArchiveContainer.js");
const products = new ProductArchiveContainer("./src/db/products.txt");

const productController = {
  getAllProducts: () => {
    const prod = products.getAll();
    return prod
  }
}

const apiControllers = {

  products: (req, res) => {
    if (req.method === "GET") {
      res.json(products.getAll());
    } else if (req.method === "POST") {
      res.json(products.save(req.body));
    }
  },

  productById: (req, res) => {
    const { id } = req.params;
    if (req.method === "GET") {
      res.json(products.getById(parseInt(id)));
    } else if (req.method === "PUT") {
      products.update(req.body);
      res.json(req.body.title + " updated correctly.");
    } else if (req.method === "DELETE") {
      products.deleteById(parseInt(id));
      res.json(req.body.id + " was deleted correctly.");
    } else {
    }
  },

  randomProduct: (req, res) => {
    res.json(products.getRandomProduct());
  },
};

module.exports = { apiControllers, productController, messageController };
