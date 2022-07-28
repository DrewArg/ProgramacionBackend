import httpServer from "./server.js";
import SocketController from "./controllers/socketControllers.js";
import { port as PORT } from "./config/minimist.js";


const io = new SocketController(httpServer);
const connectedServer = httpServer.listen(PORT, () => {
  console.log(
    `Servidor http escuchando en el puerto ${connectedServer.address().port}`
  );
});

connectedServer.on("error", (e) => console.log(`Error en servidor ${e}`));