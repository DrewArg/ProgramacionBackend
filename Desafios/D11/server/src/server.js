import express from "express";
import session from "express-session";
import { passportMiddleware, passportSessionHandler } from './middlewares/passport.js'
import { sessionConfig } from "./config.js";
import { Server as HttpServer } from "http";

import apiRouter from "./routers/api/apiRouter.js";
import cors from 'cors'

const expressApp = express();

expressApp.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))
expressApp.use(session(sessionConfig))

expressApp.use(express.json());
expressApp.use(express.urlencoded({ extended: true }));

expressApp.use(apiRouter)

const httpServer = new HttpServer(expressApp);

export default httpServer
