const ProductArchiveContainer = require("../containers/ProductArchiveContainer.js");
const products = new ProductArchiveContainer("./src/db/products.txt");
const a = {
  
};

const productController = {

  async getById(req, res) {
    console.log(req);
    const id = req.params.id;
    try {
      const prod = await products.getById(parseInt(id));
      console.log({prod});
      await res.json(prod);
    } catch (e) {
      console.log(e);
    }
  },

  getAllProducts: () => {
    return products.getAllProducts();
  },

  aaaaaa: () => {
    console.log("nuevo");
    try {
      const prod = products.getById(parseInt(id));
      res.status(200).json(prod);
    } catch (error) {
      console.log("producto no encontrado");
    }
  },

  createProduct: (req, res) => {
    res.status(201).json(products.createProduct(req.body));
  },

  hola: (req, res) => {
    console.log("hola");
  },

  lll: (req, res) => {
    console.log("get prod by id");
    try {
      const prod = products.getById(parseInt(id));
      res.status(200).json(prod);
    } catch (error) {
      console.log("producto no encontrado");
    }
  },

  // products: (req, res) => {
  //   if (req.method === "GET") {
  //     res.json(products.getAll());

  //     //estos metodos deberian ser solo para el admin
  //   } else if (req.method === "POST") {
  //     res.json(products.createProduct(req.body));
  //   }
  // },

  productById: (req, res) => {
    console.log(req.params);
    const { productId } = req.params;

    if (req.method === "GET") {
      console.log("product by id");
      res.json(products.getById(parseInt(productId)));

      //estos metodos deberian ser solo para el admin
    } else if (req.method === "PUT") {
      products.update(req.body);
      res.json(req.body.title + " updated correctly.");
    } else if (req.method === "DELETE") {
      products.deleteById(parseInt(productId));
      res.json(req.body.productId + " was deleted correctly.");
    }
  },
};

module.exports = { productController ,a};
