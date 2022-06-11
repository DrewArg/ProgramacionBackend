const CartArchiveContainer = require("../containers/CartArchiveContainer.js");
const carts = new CartArchiveContainer("./src/db/carts.txt");

const cartController = {
  createCart: (req, res) => {
    if (req.method === "POST") {
      res.json(carts.createCart(req.body));
    }
  },

  cartById: (req, res) => {
    const { cartId } = req.params;
    if (req.method === "DELETE") {
      res.json(carts.deleteById(parseInt(cartId)));
    }
  },

  productsInCart: async (cartId) => {
    return await carts.getAllProducts(cartId);
  },

  productById: async (req, res) => {
    const productId = req.params.productId;
    const cartId = req.params.cartId;
    if (req.method === "DELETE") {
      await res.json(carts.removeProduct(productId, cartId));
    }
  },

  addProduct: (req, res) => {
    const cartId = req.params.id;
    if (req.method === "POST") {
      res.json(carts.addProduct(req.body, cartId));
    }
  },

  getCartsIds: () => {
    return carts.getCartsIds();
  },
};

module.exports = { cartController };
