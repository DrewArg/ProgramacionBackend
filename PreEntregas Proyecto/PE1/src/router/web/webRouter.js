const { Router } = require('express')
const { webGetRootController } = require('../../controllers/webControllers.js')

const webRouter = new Router();

webRouter.get('/', webGetRootController)
webRouter.post('/', webGetRootController)

module.exports = webRouter
