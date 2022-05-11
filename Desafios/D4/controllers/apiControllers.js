const ArchiveContainer = require("../containers/ArchiveContainer.js");

const products = new ArchiveContainer("./db/products.txt");

// app.post('/api/palabras', (req, res) => {
//   const { palabra } = req.body
//   palabras.push(palabra)
//   res.json({ agregada: palabra, posicion: palabras.length })
// })

const apiControllers = {
  products: (req, res) => {
    if (req.method === "GET") {
      res.json(products.getAll());
    } else if (req.method === "POST") {
      res.json(products.save(req.body));
    }
  },
  randomProduct: (req, res) => {
    res.json(products.getRandomProduct());
  },
};

module.exports = { apiControllers };
