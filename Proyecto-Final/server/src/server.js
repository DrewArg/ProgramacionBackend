import express from 'express'
import { Server as HttpServer } from 'http'
import productsRouter from './routers/index.js'
import { errorHandler } from './middlewares/errorHandler.js'

const app = express()

app.use('/public', express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(errorHandler)
app.use('/api/products', productsRouter)



const httpServer = new HttpServer(app)

export default httpServer