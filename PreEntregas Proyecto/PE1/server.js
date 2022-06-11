const express = require("express");
const dotenv = require("dotenv");

const { Server: HttpServer } = require("http");

const productRouter = require("./src/router/api/productRouter.js");
const cartRouter = require("./src/router/api/cartRouter.js");
const cartIdRouter = require("./src/router/api/cartIdRouter.js");
const webRouter = require("./src/router/web/webRouter.js");
const apiRouter = require("./src/router/api/apiRouter.js");

const socketController = require("./src/controllers/socketControllers.js");

const expressApp = express();
const httpServer = new HttpServer(expressApp);
const io = new socketController(httpServer);

const { engine } = require("express-handlebars");

dotenv.config();

expressApp.use(express.json());
expressApp.use(express.urlencoded({ extended: true }));
expressApp.use(express.static("public"));

expressApp.engine("handlebars", engine());
expressApp.set("views", "./public/views");
expressApp.set("view engine", "handlebars");

expressApp.use(webRouter);
console.log("server");
expressApp.use("/api", productRouter);
expressApp.use("/api", cartRouter);
expressApp.use("/api", cartIdRouter);

expressApp.use(apiRouter);

const PORT = process.env.PORT || 8080;

const connectedServer = httpServer.listen(PORT, () => {
  console.log(
    `Servidor http escuchando en el puerto ${connectedServer.address().port}`
  );
});

connectedServer.on("error", (e) => console.log(`Error en servidor ${e}`));
