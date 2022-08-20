import { Server as Socket } from 'socket.io'

export const SocketController = (server) => {
    const socketServer = new Socket(server, {
        cors: {
            origin: 'http://localhost:8080',
            methods: ["GET", "POST", "PUT", "DELETE"],
            credentials: true
        }
    })

    socketServer.on("connected", (expressSocket) => {
        console.log(`new connection: ${expressSocket.id}`);
    })

    socketServer.on("disconnected", (expressSocket) => {
        console.log(`disconnected: ${expressSocket.id}`);
    })
}