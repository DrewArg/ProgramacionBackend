const express = require('express');
const dotenv = require('dotenv');

const { Server: HttpServer } = require('http')

const { productRouter } = require('./src/router/api/apiRouter.js')
const webRouter = require('../D6/src/router/web/webRouter')

const socketController = require('../D6/src/controllers/socketControllers.js')

const expressApp = express();
const httpServer = new HttpServer(expressApp);
const io = new socketController(httpServer);

const { engine } = require('express-handlebars');

dotenv.config();

expressApp.use(express.json())
expressApp.use(express.urlencoded({ extended: true }))
expressApp.use(express.static('public'))

expressApp.engine('handlebars', engine())
expressApp.set('views', './public/views')
expressApp.set('view engine', 'handlebars')

expressApp.use(webRouter)

expressApp.use("/api", productRouter)

const PORT = process.env.PORT || 8080;

const connectedServer = httpServer.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${connectedServer.address().port}`);
});

connectedServer.on("error", (e) => console.log(`Error en servidor ${e}`));
