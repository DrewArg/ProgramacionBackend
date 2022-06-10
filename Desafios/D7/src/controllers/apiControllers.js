import ProductArchiveContainer from '../containers/ProductArchiveContainer.js'
import MessageArchiveContainer from '../containers/MessageArchiveContainer.js'

const products = new ProductArchiveContainer("./src/db/products.txt");
const messages = new MessageArchiveContainer("./src/db/messages.txt");

const productController = {
  getAllProducts: () => {
    const prod = products.getAll();
    return prod
  }
}

const messageController = {
  getAllMessages: () => {
    const msg = messages.getAll();
    return msg
  }
}

const apiControllers = {

  messages: (req, res) => {
    if (req.method === "POST") {
      res.json(messages.save(req.body));
    } else {
      console.log("method not defined --> " + req.method);
    }
  },

  products: (req, res) => {
    if (req.method === "GET") {
      res.json(products.getAll());
    } else if (req.method === "POST") {
      res.json(products.save(req.body));
    }
  },

  productById: (req, res) => {
    const { id } = req.params;

    if (req.method === "GET") {
      res.json(products.getById(parseInt(id)));
    } else if (req.method === "PUT") {
      products.update(req.body);

      res.json(req.body.title + " updated correctly.");
    } else if (req.method === "DELETE") {
      products.deleteById(parseInt(id));
      res.json(req.body.id + " was deleted correctly.");
    } else {
    }
  },

  randomProduct: (req, res) => {
    res.json(products.getRandomProduct());
  },
};

export { apiControllers, productController, messageController };
