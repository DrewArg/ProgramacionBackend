const CartArchiveContainer = require("../containers/CartArchiveContainer.js");
const carts = new CartArchiveContainer("./src/db/carts.txt");

const cartController = {
  createCart: (req, res) => {
    if (req.method === "POST") {
      res.json(carts.save(req.body));
    }
  },

  cartById: (req, res) => {
    const { cartId } = req.params;
    if (req.method === "DELETE") {
      res.json(carts.deleteById(parseInt(cartId)));
    }
  },

  productsInCart: (req, res) => {
    const { cartId } = req.params;
    if (req.method === "GET") {
      res.json(carts.getAllProducts(parseInt(cartId)));
    }
  },

  productById: (req, res) => {
    const { productId, cartId } = req.params;
    if (req.method === "DELETE") {
      res.json(carts.getProductById(parseInt(productId, cartId)));
    }
  },

  addProduct: (req, res) => {
    const { cartId } = req.params;
    if (req.method === "POST") {
      res.json(carts.addProduct(req.body, cartId))
    }
  }
};

module.exports = { cartController }
