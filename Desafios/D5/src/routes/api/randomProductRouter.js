const express = require('express')
const { apiControllers } = require('../../controllers/apiControllers.js')

const randomProductRouter = express.Router();

randomProductRouter.use((req, res, next) => {
    console.log(req.ip);
    next();
})

randomProductRouter.get('/', apiControllers.randomProduct);

module.exports = randomProductRouter
