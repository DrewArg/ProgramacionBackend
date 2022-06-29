import express from "express";

import { Server as HttpServer } from "http";

import webRouter from "./routers/web/webRouter.js";
import apiRouter from "./routers/api/apiRouter.js";

const expressApp = express();

import { engine } from "express-handlebars";

expressApp.use(express.json());
expressApp.use(express.urlencoded({ extended: true }));
expressApp.use(express.static("public"));

expressApp.engine('handlebars',engine())
expressApp.set('views','./public/views')
expressApp.set('view engine','handlebars')

expressApp.use(webRouter)
expressApp.use(apiRouter)

const httpServer = new HttpServer(expressApp);

export default httpServer
