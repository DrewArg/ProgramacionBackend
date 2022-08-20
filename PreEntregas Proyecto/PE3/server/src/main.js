import httpServer from './server.js'
import SocketController from './controllers/socketControllers.js'
import { connectCluster } from './cluster.js'
import { port as PORT, mode as MODE } from './config/minimist.js'

function connectServer() {
    const io = new SocketController(httpServer)

    const connectServer = httpServer.listen(process.env.PORT || PORT, () => {
        console.log(`Servidor http escuchando en el puerto ${connectServer.address().port}`);
    })

    connectServer.on("error", (e) => console.log(`Error en el servidor:  ${e}`))
}

switch (MODE) {
    case "cluster":
        connectCluster()
        break;

    default:
        connectServer()
        break;
}