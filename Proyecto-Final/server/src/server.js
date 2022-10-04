import express from 'express'
import { Server as HttpServer } from 'http'

const app = express()

app.use('/public', express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const httpServer = new HttpServer(app)

export default httpServer