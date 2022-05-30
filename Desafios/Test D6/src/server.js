const express = require('express');
const {Server : HttpServer} = require('http')
const socketController = require('../src/controller/socketControllers.js')
const { productRouter, randomProductRouter } = require('../src/router/api/apiRouter.js')
const webRouter = require('../src/router/web/webRouter.js')

const expressApp = express();
const httpServer = new HttpServer(expressApp)
const io = new socketController(httpServer)

const { engine } = require('express-handlebars');

expressApp.use(express.json())
expressApp.use(express.urlencoded({extended:true}))
expressApp.use(express.static('public'))

expressApp.engine('handlebars', engine())
expressApp.set('views', './public/views')
expressApp.set('view engine', 'handlebars')

expressApp.use(webRouter)

expressApp.use("/api/products", productRouter)
expressApp.use("/api/randomProduct", randomProductRouter)

const PORT = 8080
const server = httpServer.listen(PORT, ()=>{
    console.log(`Servidor escuchando en el puerto ${server.address().port}`);
})

server.on('error',e=>console.log("Error en el servidor!! Error: " + e))