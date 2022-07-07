import express from "express";

import { Server as HttpServer } from "http";

import apiRouter from "./routers/api/apiRouter.js";
import cors from 'cors'

const expressApp = express();

expressApp.use(cors())

expressApp.use(express.json());
expressApp.use(express.urlencoded({ extended: true }));

expressApp.use(apiRouter)

const httpServer = new HttpServer(expressApp);

export default httpServer
