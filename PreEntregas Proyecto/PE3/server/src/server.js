import dotenv from 'dotenv'
import express from 'express'
import session from 'express-session'
import { passportMiddleware, passportSessionHandler } from './middlewares/passport.js'
import { sessionConfig } from './config/config.js'
import { Server as HttpServer } from 'http'
import apiRouter from './routers/api/apiRouter.js'
import cors from 'cors'
import socketRouter from './routers/socket/socketRouter.js'

dotenv.config()

const app = express()

app.use(cors({
    origin: process.env.CLIENT_REACT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))

app.use('/public', express.static('public'));

app.use(session(sessionConfig))


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(passportMiddleware)
app.use(passportSessionHandler)


app.use(socketRouter)
app.use(apiRouter)

const httpServer = new HttpServer(app)

export default httpServer