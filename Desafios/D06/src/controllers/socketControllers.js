const { Server: Socket } = require('socket.io')

const { productController, messageController } = require('./apiControllers')

function socketController(server) {
    const io = new Socket(server)
    io.on('connection', socket => {
        console.log("conexión nueva");

        socket.on('disconnect', () => {
            console.log("desconexión");
        })

        socket.on('product', async () => {
            io.sockets.emit('products', await productController.getAllProducts())
            socket.emit('products', await productController.getAllProducts())
        })

        socket.on('getAllProducts', async () => {
            console.log("tomando productos..");
            socket.emit('products', await productController.getAllProducts())
            io.sockets.emit('products', await productController.getAllProducts())
        })

        socket.on('getAllMessages', async () => {
            console.log("tomando mensajes..");
            socket.emit('messages', await messageController.getAllMessages())
            io.sockets.emit('messages', await messageController.getAllMessages())
        })

    })

    return io
}

module.exports = socketController