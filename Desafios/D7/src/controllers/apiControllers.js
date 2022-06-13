import ProductArchiveTable from "../db/ProductArchiveTable.js";
import MessageArchiveTable from "../db/MessageArchiveTable.js";
import { getConfig } from "../db/knexConfig.js";

const products = new ProductArchiveTable(getConfig("sqlite3"), "products");
const messages = new MessageArchiveTable(getConfig("mysql2"), "messages");

const productController = {
  getAllProducts: async () => {
    const prods = await products.getAll();
    return prods;
  },

  save: async (req, res) => {
    const prod = await products.save(req.body);
    return prod;
  },
};

const messageController = {
  getAllMessages: async () => {
    const msgs = await messages.getAll();
    return msgs;
  },

  save: async (req, res) => {
    const message = await messages.save(req.body);
    return message;
  },
};

export { productController, messageController };
