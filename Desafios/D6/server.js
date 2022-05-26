const express = require("express");
const dotenv = require("dotenv");
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io');

const { productRouter, randomProductRouter } = require('./src/router/api/apiRouter.js')
const { webRouter } = require('./src/router/web/webRouter.js')

const { engine } = require('express-handlebars')

dotenv.config();

const expressApp = express();
const PORT = process.env.PORT || 8080;
const httpServer = new HttpServer(expressApp);
const io = new IOServer(httpServer);

expressApp.use(express.static('public'))

expressApp.engine('handlebars', engine())
expressApp.set('views', './views')
expressApp.set('view engine', 'handlebars')

expressApp.use(webRouter)

expressApp.use("/api/products", productRouter)
expressApp.use("/api/randomProduct", randomProductRouter)

const connectedServer = expressApp.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${connectedServer.address().port}`);
});

connectedServer.on("error", (e) => console.log(`Error en servidor ${e}`));
