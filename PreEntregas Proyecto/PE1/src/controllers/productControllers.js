const ProductArchiveContainer = require("../containers/ProductArchiveContainer.js");
const products = new ProductArchiveContainer("./src/db/products.txt");

const productController = {
  async getById(req, res) {
    try {
      const prod = await products.getById(req.params.id);
      res.json(prod);
    } catch (e) {
      console.log(e);
      return { error: e };
    }
  },

  async updateProduct(req, res) {
    try {
      const prod = await products.update(req);
      res.json(prod);
    } catch (e) {
      return { error: e };
    }
  },

  async deleteById(req, res) {
    const id = req.params.id;
    try {
      return await products.deleteById(id);
    } catch (e) {
      return { error: e };
    }
  },

  getAllProducts: () => {
    return products.getAllProducts();
  },

  createProduct: (req, res) => {
    try {
      res.status(201).json(products.createProduct(req.body));
    } catch (error) {
      return { error: error.message };
    }
  },
};

module.exports = { productController };
