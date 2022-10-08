import httpServer from "./server.js";
import { PORT } from "./config/config.js";
import SocketController from "./controllers/SocketControllers.js";

const io = new SocketController(httpServer);

const connectedServer = httpServer.listen(process.env.PORT || PORT, () => {
  console.log(
    `Http server listening to port ${connectedServer.address().port}`
  );
});

connectedServer.on("error", (e) => {
  console.log(`Server error: ${e}`);
});
