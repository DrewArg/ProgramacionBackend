import httpServer from "./server.js";
import dotenv from "dotenv";
import SocketController from "./controllers/socketControllers.js";


dotenv.config();

const io = new SocketController(httpServer);

const PORT = process.env.PORT || 8080;
const connectedServer = httpServer.listen(PORT, () => {
  console.log(
    `Servidor http escuchando en el puerto ${connectedServer.address().port}`
  );
});

connectedServer.on("error", (e) => console.log(`Error en servidor ${e}`));