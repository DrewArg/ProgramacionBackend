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

  productsInCart: (req, res) => {
    if (req.method === "GET") {
      res.json(carts.getAllProducts());
    }
  },

  productById: (req, res) => {
    const { productId, cartId } = req.params;
    if (req.method === "DELETE") {
      res.json(carts.getProductById(parseInt(productId, cartId)));
    }
  },

  addProduct: (req,res)=>{
      const {cartId} = req.params;
      if(req.method === "POST"){
          res.json(carts.saveProduct(req.body,cartId))
      }
  }
};

module.exports = {cartController}