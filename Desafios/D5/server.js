const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const { productRouter, randomProductRouter } = require('./src/router/api/apiRouter.js')
const { webRouter } = require('./src/router/web/webRouter.js')

const { engine } = require('express-handlebars')

dotenv.config();

const expressApp = express();
const PORT = process.env.PORT || 8080;

expressApp.use(bodyParser.urlencoded({ extended: false }))

expressApp.use(bodyParser.json())
expressApp.use(bodyParser.text())

expressApp.use(express.static('public'))

expressApp.engine('handlebars', engine())
expressApp.set('view engine', 'handlebars')

expressApp.use(webRouter)

expressApp.use("/api/products", productRouter)
expressApp.use("/api/randomProduct", randomProductRouter)

const server = expressApp.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});

server.on("error", (e) => console.log(`Error en servidor ${e}`));
