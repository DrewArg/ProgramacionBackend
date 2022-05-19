const express = require('express')
const { apiControllers } = require('../../controllers/apiControllers.js')

const randomProduct = express.Router();

randomProduct.use((req, res, next) => {
    console.log(req.ip);
    next();
})

randomProduct.get('/', apiControllers.randomProduct);

module.exports = randomProduct
