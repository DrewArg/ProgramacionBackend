const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const handlebars = require("handlebars")

const productRouter = require('./src/routes/api/productRouter.js')
const randomProductRouter = require('./src/routes/api/randomProductRouter.js')

dotenv.config();

const expressApp = express();
const PORT = process.env.PORT || 8080;

expressApp.use(bodyParser.urlencoded({ extended: false }))

expressApp.use(bodyParser.json())
expressApp.use(bodyParser.text())
expressApp.use("/public", express.static('./public/'));

expressApp.get("/", (req, res) => {
  res.sendFile(__dirname + '/public/layouts/index.html')
})

expressApp.use("/api/products",productRouter)
expressApp.use("/api/randomProduct",randomProductRouter)

const server = expressApp.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});

server.on("error", (e) => console.log(`Error en servidor ${e}`));
