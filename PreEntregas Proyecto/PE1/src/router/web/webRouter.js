const { Router } = require('express')
const { webGetLoginController, webGetRootController, webGetCartController, webGet404Controller } = require('../../controllers/webControllers.js')

const webRouter = new Router();

webRouter.get('/login', webGetLoginController)

webRouter.get('/', webGetRootController)
webRouter.post('/', webGetRootController)

webRouter.get('/cart', webGetCartController)
webRouter.get('/*', webGet404Controller)

module.exports = webRouter
