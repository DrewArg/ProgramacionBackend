import express from 'express'

import {productsRouter} from './routers/productRouter.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api/products',productsRouter)

export default app