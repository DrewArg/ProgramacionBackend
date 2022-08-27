import dotenv from 'dotenv'
import express from 'express'
import session from 'express-session'
import { passportMiddleware, passportSessionHandler } from './middlewares/passport.js'
import { sessionConfig } from './config/config.js'
import { Server as HttpServer } from 'http'
import apiRouter from './routers/api/apiRouter.js'
import cors from 'cors'
import socketRouter from './routers/socket/socketRouter.js'
import { clientUrl } from './config/config.js'
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config()

const app = express()

app.use(cors({
    origin: clientUrl,
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

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "client/build")));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

const httpServer = new HttpServer(app)

export default httpServer