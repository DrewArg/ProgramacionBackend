const CartIdArchiveContainer = require("../containers/CartIdArchiveContainer.js");
const currentCartId = new CartIdArchiveContainer("./src/db/currentCartId.txt");

const cartIdController = {
  saveCurrentId: (req, res) => {
    const cartId = req.params.id;
    if (req.method === "POST") {
      currentCartId.changeCartId(cartId);
    }
  },
  getCurrentId: (req, res) => {
    if(req.method === "GET"){
        res.json(currentCartId.getCartId())
    }
  },
};

module.exports = { cartIdController };
