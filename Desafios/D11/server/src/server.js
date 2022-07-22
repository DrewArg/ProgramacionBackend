import express from "express";
import session from "express-session";
import { passportMiddleware, passportSessionHandler } from './middlewares/passport.js'
import { sessionConfig } from "./config.js";
import { Server as HttpServer } from "http";

import apiRouter from "./routers/api/apiRouter.js";
import cors from 'cors'
import morgan from 'morgan'

const expressApp = express();

expressApp.use(morgan("dev"))
expressApp.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))
expressApp.use(session(sessionConfig))

expressApp.use(express.json());
expressApp.use(express.urlencoded({ extended: true }));
expressApp.use(passportMiddleware)
expressApp.use(passportSessionHandler)

expressApp.use(apiRouter)

const httpServer = new HttpServer(expressApp);

export default httpServer
