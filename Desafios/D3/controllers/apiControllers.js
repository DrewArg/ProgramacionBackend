const ArchiveContainer = require("../db/ArchiveContainer.js");

const products = new ArchiveContainer('./db/products.txt');

const apiControllers = {
    products: (req, res) => {
        res.json(products.getAll())
    },
    randomProduct: (req, res) => {
        res.json(products.getRandomProduct())
    }
}

module.exports = { apiControllers }