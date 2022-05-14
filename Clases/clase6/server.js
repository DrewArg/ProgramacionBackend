//npm install socket.io
const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: SocketServer } = require('socket.io');

const expressApp = express();
const httpServer = new HttpServer(expressApp);
const io = new SocketServer(httpServer);

const PORT = 8080;

expressApp.use(express.static('public'))

expressApp.get('/', (req, res) => {
    res.sendFile('index.html', { root: './views' })
})

io.on('connection', socket => {
    console.log('alguien se conectó');
    // console.log(socket);
    //esto es un ejemplito, se puede mandar cualquier cosa pero si o si debe ser serializable ( siempre se serializa a json)
    socket.emit('conexionOk', { fecha: new Date().toLocaleString() })

    socket.on('ping', () => {
        console.log(`socket: ${socket.id} dice PING`);
    })
})


const server = httpServer.listen(PORT, () => {
    console.log(`escuchando en puerto ${server.address().port}`);
})