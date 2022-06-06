const ProductArchiveContainer = require("../containers/ProductArchiveContainer.js");
const products = new ProductArchiveContainer("./src/db/products.txt");

const productController = {

  async getById(req, res) {

    try {
      const prod = await products.getById(req.params.id);
      console.log(prod);
      return (prod);
    } catch (e) {
      console.log(e);
    }
  },

  async updateProduct(req, res) {
    try {
      const prod = await products.update(req);
      return (prod);
    } catch (e) {
      console.log(e);
    }
  },

  async deleteById(req, res) {

    const id = req.params.id;
    try {
      return await products.deleteById(id);
    } catch (e) {
      console.log(e);
    }
  },

  getAllProducts: () => {
    return products.getAllProducts();
  },

  createProduct: (req, res) => {
    res.status(201).json(products.createProduct(req.body));
  },


};

module.exports = { productController };
