const { Server: Socket } = require('socket.io')

const { productController } = require('./productControllers')

function socketController(server) {
    const io = new Socket(server)
    io.on('connection', socket => {
        console.log("conexión nueva");

        socket.on('disconnect', () => {
            console.log("desconexión");
        })

        socket.on('searchProduct', async (id) => {
            socket.emit('foundProduct', await productController.getById(id))

        })

        socket.on('product', async () => {
            io.sockets.emit('productById', await productController.productById())
            socket.emit('productById', await productController.productById())
        })

        socket.on('getAllProducts', async () => {
            console.log("tomando productos..");
            socket.emit('products', await productController.getAllProducts())
            io.sockets.emit('products', await productController.getAllProducts())
        })


    })

    return io
}

module.exports = socketController