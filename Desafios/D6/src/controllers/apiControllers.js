const ArchiveContainer = require("../containers/ArchiveContainer.js");
const products = new ArchiveContainer("./src/db/products.txt");

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

module.exports = { apiControllers };
