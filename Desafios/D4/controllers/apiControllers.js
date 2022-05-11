const ArchiveContainer = require("../containers/ArchiveContainer.js");

const products = new ArchiveContainer("./db/products.txt");

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
      const product = products.getById(parseInt(id));
      if (!!product) {
        product.title = req.body.title;
        product.price = req.body.price;
        product.thumbnail = req.body.thumbnail;
        res.json(product.title + " updated correctly.");
      }
    } else if (req.method === "DELETE") {
      products.deleteById(parseInt(id));
      res.json(product.title + " was deleted correctly.");
    }
  },

  randomProduct: (req, res) => {
    res.json(products.getRandomProduct());
  },
};

module.exports = { apiControllers };
