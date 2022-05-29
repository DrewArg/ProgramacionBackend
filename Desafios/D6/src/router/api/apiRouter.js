const express = require('express')
const { apiControllers } = require('../../controllers/apiControllers.js')

const productRouter = express.Router();

productRouter.use((req, res, next) => {
    next();
})

productRouter.get('/', apiControllers.products);
productRouter.get('/:id', apiControllers.productById)

productRouter.post('/', apiControllers.products)

productRouter.put('/:id', apiControllers.productById)

productRouter.delete('/:id', apiControllers.productById)

const randomProductRouter = express.Router();

randomProductRouter.use((req, res, next) => {
    next();
})

randomProductRouter.get('/', apiControllers.randomProduct);


module.exports = { productRouter, randomProductRouter }
