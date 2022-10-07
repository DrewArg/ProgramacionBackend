import express from 'express'
import { Server as HttpServer } from 'http'
import { productsRouter, cartsRouter, ordersRouter, imagesRouter } from './routers/index.js'
import { errorHandler } from './middlewares/errorHandler.js'

const app = express()

app.use('/public', express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/images', imagesRouter)
app.use('/api/products', productsRouter)
app.use('/api/shoppingcartproducts', cartsRouter)
app.use('/api/orders', ordersRouter)
app.use(errorHandler)



const httpServer = new HttpServer(app)

export default httpServer