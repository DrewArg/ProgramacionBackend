const express = require('express')
const { apiControllers } = require('../../controllers/apiControllers.js')

const productRouter = express.Router();

productRouter.use((req, res, next) => {
    console.log(req.ip);

    next();
})

productRouter.get('/', apiControllers.products);
productRouter.get('/:id', apiControllers.productById)

productRouter.post('/', apiControllers.products)

productRouter.put('/:id', apiControllers.productById)

productRouter.delete('/:id', apiControllers.productById)

module.exports = productRouter
