const ProductArchiveContainer = require("../containers/ProductArchiveContainer.js");
const products = new ProductArchiveContainer("./src/db/products.txt");

const productController = {
  getAllProducts: () => {
    return products.getAllProducts();
  },

  products: (req, res) => {
    if (req.method === "GET") {
      res.json(products.getAll());

      //estos metodos deberian ser solo para el admin
    } else if (req.method === "POST") {
      res.json(products.createProduct(req.body));
    }
  },

  productById: (req, res) => {
    const { productId } = req.params;

    if (req.method === "GET") {
      res.json(products.getById(parseInt(productId)));

      //estos metodos deberian ser solo para el admin
    } else if (req.method === "PUT") {
      products.update(req.body);
      res.json(req.body.title + " updated correctly.");
    } else if (req.method === "DELETE") {
      products.deleteById(parseInt(productId));
      res.json(req.body.productId + " was deleted correctly.");
    }
  },
};

module.exports = { productController };
