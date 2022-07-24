import dotenv from "dotenv";
import express from "express";
import session from "express-session";
import { passportMiddleware, passportSessionHandler } from './middlewares/passport.js'
import { sessionConfig } from "./config/config.js"
import { Server as HttpServer } from "http";
import apiRouter from "./routers/api/apiRouter.js";
import infoRouter from "./routers/infoRouter.js"
import cors from 'cors'


dotenv.config();

const expressApp = express();

console.log(process.env.CORS_ORIGIN);

expressApp.use(cors({
    origin: process.env.CORS_ORIGIN,
    methods: process.env.CORS_METHODS,
    credentials: process.env.CORS_CREDENTIALS
}))

expressApp.use(session(sessionConfig))

expressApp.use(express.json());
expressApp.use(express.urlencoded({ extended: true }));
expressApp.use(passportMiddleware)
expressApp.use(passportSessionHandler)

expressApp.use(infoRouter)
expressApp.use(apiRouter)

const httpServer = new HttpServer(expressApp);

export default httpServer
