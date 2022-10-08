import { Server as Socket } from "socket.io";
import { messagesControllers } from "./index.js";
import { winston } from "./loggersControllers.js";

function socketController(server) {
  const io = new Socket(server);
  io.on("connection", (socket) => {
    winston.info("conexión nueva");

    socket.on("disconnect", () => {
      winston.info("desconexión");
    });

    socket.on("getAllMessages", async () => {
      socket.emit("messages", await _tryGetAllMessages());
      io.sockets.emit("messages", await _tryGetAllMessages());
    });

    socket.on("saveMessage", async (message) => {
      try {
        await messagesControllers.saveMessage(message);

        socket.emit("messages", await _tryGetAllMessages());
        io.sockets.emit("messages", await _tryGetAllMessages());
      } catch (error) {
        console.error(
          `Socket controller --> no se pudo guardar el mensaje. ${error}`
        );
      }
    });
  });

  return io;
}

export default socketController;

async function _tryGetAllMessages() {
  try {
    const messages = await messagesControllers.getAllMessages();
    return messages;
  } catch (error) {
    winston.error(
      `Socket controller --> no se pudieron obtener mensajes. ${error}`
    );
  }
}
