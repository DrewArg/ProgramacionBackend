import dotenv from "dotenv";
import express from "express";
import session from "express-session";
import { passportMiddleware, passportSessionHandler } from './middlewares/passport.js'
import { sessionConfig } from "./config/config.js"
import { Server as HttpServer } from "http";
import apiRouter from "./routers/api/apiRouter.js";
import infoRouter from "./routers/infoRouter.js"
import cors from 'cors'
import { graphqlMiddleware } from "./middlewares/graphQl.js";

dotenv.config();

const expressApp = express();

expressApp.use(cors({
    origin: `${process.env.CLIENT_URL}`,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))

expressApp.use(session(sessionConfig))

expressApp.use(express.json());
expressApp.use(express.urlencoded({ extended: true }));
expressApp.use(passportMiddleware)
expressApp.use(passportSessionHandler)


expressApp.use('/graphql', graphqlMiddleware)
expressApp.use(infoRouter)
expressApp.use(apiRouter)

const httpServer = new HttpServer(expressApp);

export default httpServer
