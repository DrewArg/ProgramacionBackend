import dotenv from 'dotenv'
import express from 'express'
import session from 'express-session'
import { passportMiddleware, passportSessionHandler } from './middlewares/passport.js'
import { sessionConfig } from './config/config.js'
import { Server as HttpServer } from 'http'
import apiRouter from './routers/api/apiRouter.js'
import infoRouter from './routers/infoRouter.js'
import cors from 'cors'

dotenv.config()

const app = express()

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))

app.use(session(sessionConfig))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(passportMiddleware)
app.use(passportSessionHandler)

app.use(infoRouter)
app.use(apiRouter)

const httpServer = new HttpServer(app)

export default httpServer