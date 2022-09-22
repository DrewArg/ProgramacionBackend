import httpServer from "./server.js";
import SocketController from "./controllers/socketControllers.js";
import { connectCluster } from "./cluster.js";
import { port as PORT, mode as MODE } from "./config/minimist.js";

function connectServer() {
  const io = new SocketController(httpServer);

  const connectedServer = httpServer.listen(process.env.PORT || PORT, () => {
    console.log(
      `Servidor http escuchando en el puerto ${connectedServer.address().port}`
    );
  });

  connectedServer.on("error", (e) => console.log(`Error en servidor ${e}`));
}

switch (MODE) {
  case "cluster":
    connectCluster()
    break;

  default:
    connectServer()
    break;
}

