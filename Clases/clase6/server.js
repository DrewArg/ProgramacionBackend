//npm install socket.io
const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: SocketServer } = require('socket.io');

const expressApp = express();
const httpServer = new HttpServer(expressApp);
const io = new SocketServer(httpServer);
const { getMensajes, agregarMensajes } = require('./mensajes.js')

const PORT = 8080;

//persistencia de mensajes para ver los que ya estabna madnados

expressApp.use(express.static('public'))

// todos estos son endpoints
expressApp.get('/', (req, res) => {
    res.sendFile('index.html', { root: './views' })
})

expressApp.get('/molestar', (req, res) => {
    //esto siguiente le manda un mensaje a todos los sockets
    io.sockets.emit('JAJA es joda!')
    res.sendStatus(204) //esto se responde para el delete
})

io.on('connection', socket => {
    console.log('alguien se conectó');
    // console.log(socket);
    //esto es un ejemplito, se puede mandar cualquier cosa pero si o si debe ser serializable ( siempre se serializa a json)
    // socket.emit('conexionOk', { fecha: new Date().toLocaleString() })

    // socket.on('ping', () => {
    //     console.log(`socket: ${socket.id} dice PING`);
    // })

    const mensajes = getMensajes();
    socket.emit('mensaje', { mensajes })
    socket.on('mensaje', mensaje => {
        agregarMensajes(mensaje)
    })
})

const server = httpServer.listen(PORT, () => {
    console.log(`escuchando en puerto ${server.address().port}`);
})