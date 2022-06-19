import httpServer from "./server.js";
import dotenv from "dotenv";
//import socketController from "./controller/socketController.js";


dotenv.config();

//const io = new socketController(httpServer);

const PORT = process.env.PORT || 8080;
const connectedServer = httpServer.listen(PORT, () => {
  console.log(
    `Servidor http escuchando en el puerto ${connectedServer.address().port}`
  );
});

connectedServer.on("error", (e) => console.log(`Error en servidor ${e}`));
