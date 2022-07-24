import express from "express";
import session from "express-session";
import dotenv from "dotenv";
import { passportMiddleware, passportSessionHandler } from './middlewares/passport.js'
import { sessionConfig } from "./config/config.js"
import { Server as HttpServer } from "http";
import apiRouter from "./routers/api/apiRouter.js";
import cors from 'cors'

dotenv.config();

const expressApp = express();

expressApp.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: process.env.CORS_CREDENTIALS
}))
expressApp.use(session(sessionConfig))

expressApp.use(express.json());
expressApp.use(express.urlencoded({ extended: true }));
expressApp.use(passportMiddleware)
expressApp.use(passportSessionHandler)

expressApp.use(apiRouter)

const httpServer = new HttpServer(expressApp);

export default httpServer
