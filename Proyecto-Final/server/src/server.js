import express from 'express'
import { Server as HttpServer } from 'http'
import { errorHandler } from './middlewares/errorHandler'

const app = express()

app.use('/public', express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(errorHandler)

const httpServer = new HttpServer(app)

export default httpServer