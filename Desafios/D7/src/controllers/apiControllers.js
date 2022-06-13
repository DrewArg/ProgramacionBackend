import ProductArchiveTable from "../db/ProductArchiveTable.js";
import MessageArchiveTable from "../db/MessageArchiveTable.js";
import { getConfig } from "../db/knexConfig.js";

const products = new ProductArchiveTable(getConfig("sqlite3", "products"));
const messages = new MessageArchiveTable(getConfig("mysql2"), "messages");

const productController = {
  getAllProducts: () => {
    return products.getAll();
  },

  save: (product) => {
    return products.save(product);
  },
};

const messageController = {
  getAllMessages: () => {
    return messages.getAll();
  },

  save: (message) => {
    return messages.save(message);
  },
};

// productById: (req, res) => {
//   const { id } = req.params;

//   if (req.method === "GET") {
//     res.json(products.getById(parseInt(id)));
//   } else if (req.method === "PUT") {
//     products.update(req.body);

//     res.json(req.body.title + " updated correctly.");
//   } else if (req.method === "DELETE") {
//     products.deleteById(parseInt(id));
//     res.json(req.body.id + " was deleted correctly.");
//   } else {
//   }
// },

export { productController, messageController };
