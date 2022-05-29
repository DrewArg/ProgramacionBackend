const express = require('express');
const dotenv = require('dotenv');

const { Server: HttpServer } = require('http')
const { Server: Socket } = require('socket.io');

const { productRouter, randomProductRouter } = require('./src/router/api/apiRouter.js')
const { webRouter } = require('./src/router/web/webRouter.js')

const { engine } = require('express-handlebars');

//dotenv.config();

const expressApp = express();

expressApp.use(express.static('public'))

expressApp.use(express.json())
expressApp.use(express.urlencoded({ extended: true }))

expressApp.engine('handlebars', engine())
expressApp.set('views', './views')
expressApp.set('view engine', 'handlebars')

expressApp.use(webRouter)

expressApp.use("/api/products", productRouter)
expressApp.use("/api/randomProduct", randomProductRouter)

const httpServer = new HttpServer(expressApp);
const io = new Socket(httpServer);

const products = [];
// const clients = [];

io.on('connection', () => {
  console.log('Nuevo cliente conectado!');
});

// socket.emit('hola')
// socket.on('chau', () => {
//   console.log("saludando desde el cliente");
// })

// socket.emit("hello")
// socket.emit('products', products);

// socket.on('byebye'), () => {
//   console.log("bye");
// }

// socket.on('update'), product => {
//   console.log("update");
// }

// socket.on('update', product => {
//   products.push(product);
//   io.sockets.emit('products', products)
//   console.log("products socket: " + products);
// })

const PORT = process.env.PORT || 8080;

const connectedServer = expressApp.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${connectedServer.address().port}`);
});

connectedServer.on("error", (e) => console.log(`Error en servidor ${e}`));
