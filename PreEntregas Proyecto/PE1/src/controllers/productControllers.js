const ProductArchiveContainer = require("../containers/ProductArchiveContainer.js");
const products = new ProductArchiveContainer("./src/db/products.txt");

const productController = {
  getAllProducts: () => {
    return products.getAllProducts();
  },

  createProduct: (req, res) => {
    res.status(201).json(products.createProduct(req.body));
  },

  getProductById: (req, res) => {
    const { productId } = req.params;
    try {
      const prod = products.getById(parseInt(productId));
      res.status(200).json(prod);
    } catch (error) {
      res.status(404).json({ error: "producto no encontrado" });
    }
  },

  // products: (req, res) => {
  //   if (req.method === "GET") {
  //     res.json(products.getAll());

  //     //estos metodos deberian ser solo para el admin
  //   } else if (req.method === "POST") {
  //     res.json(products.createProduct(req.body));
  //   }
  // },

  productById: (req, res) => {
    console.log(req.params);
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
