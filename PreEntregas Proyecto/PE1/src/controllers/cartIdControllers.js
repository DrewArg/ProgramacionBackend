const CartIdArchiveContainer = require("../containers/CartIdArchiveContainer.js");
const currentCartId = new CartIdArchiveContainer("./src/db/currentCartId.txt");

const cartIdController = {
  saveCurrentId: async (req, res) => {
    const cartId = req.params.id;
    if (req.method === "POST") {
      await currentCartId.changeCartId(cartId);
    }
  },
  getCurrentId: async () => {
    const currCartId = await currentCartId.getCartId();
    return currCartId;
  },

  resetCartId: async () => {
    console.log("reseeet");
    const cartIdReset = "";
    await currentCartId.changeCartId(cartIdReset);
  },
};

module.exports = { cartIdController };
