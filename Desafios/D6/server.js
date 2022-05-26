const express = require("express");
const dotenv = require("dotenv");
const { Server: HttpServer } = require('http')
const { Server: SocketServer } = require('socket.io');

const { productRouter, randomProductRouter } = require('./src/router/api/apiRouter.js')
const { webRouter } = require('./src/router/web/webRouter.js')

const { engine } = require('express-handlebars')

dotenv.config();

const expressApp = express();
const PORT = process.env.PORT || 8080;
const httpServer = new HttpServer(expressApp);
const io = new SocketServer(httpServer);

expressApp.use(express.json())
expressApp.use(express.urlencoded({ extended: true }))
expressApp.use(express.static('public'))

expressApp.engine('handlebars', engine())
expressApp.set('views', './views')
expressApp.set('view engine', 'handlebars')

expressApp.use(webRouter)

expressApp.use("/api/products", productRouter)
expressApp.use("/api/randomProduct", randomProductRouter)

io.on('connection', socket => eventoCnxController(socket, io))

const connectedServer = expressApp.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${connectedServer.address().port}`);
});

connectedServer.on("error", (e) => console.log(`Error en servidor ${e}`));
