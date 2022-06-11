const CartIdArchiveContainer = require("../containers/CartIdArchiveContainer.js");
const currentCartId = new CartIdArchiveContainer("./src/db/currentCartId.txt");

const cartIdController = {
  saveCurrentId: (req, res) => {
    const cartId = req.params.id;
    if (req.method === "POST") {
      currentCartId.changeCartId(cartId);
    }
  },
  getCurrentId: async () => {
    const currCartId = await currentCartId.getCartId() 
    return currCartId;
  },
};

module.exports = { cartIdController };
