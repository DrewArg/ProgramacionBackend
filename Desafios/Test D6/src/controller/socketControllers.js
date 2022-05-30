const {Server: Socket} = require('socket.io')

const ApiController = require('./apiControllers')

function socketController (server){
    const io = new Socket(server)
    io.on('connection', socket =>{
        console.log("conexión nueva");

        socket.on('disconnect',()=>{
            console.log("desconexión");
        })

        socket.on('product',async product=>{
                await ApiController.saveProduct(product)
                io.sockets.emit('product',await ApiController.products)
        })

        socket.on('getAllProducts',async () =>{
            socket.emit('product',await ApiController.products)
        })
    })

    return io
}

module.exports = socketController