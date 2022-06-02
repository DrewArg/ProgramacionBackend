const express = require('express')
const { apiControllers } = require('../../controllers/apiControllers.js')

const productRouter = express.Router();

productRouter.use((req, res, next) => {
    next();
})

productRouter.get('/products', apiControllers.products);
productRouter.get('/products/:id', apiControllers.productById)

productRouter.post('/products', apiControllers.products)

productRouter.put('/products/:id', apiControllers.productById)

productRouter.delete('/products/:id', apiControllers.productById)

const randomProductRouter = express.Router();

randomProductRouter.use((req, res, next) => {
    next();
})

randomProductRouter.get('/products', apiControllers.randomProduct);

module.exports = { productRouter}
