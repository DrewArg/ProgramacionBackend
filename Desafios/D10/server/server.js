import express from 'express'
import http from 'http'
import { Server } from 'socket.io'
import cors from 'cors'

const app = express()

app.use(cors())

const httpServer = http.createServer(app)
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
})

io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.on("sendMessage", (data) => {
        // broadcast sends to everyone but the emitter
        socket.broadcast.emit("receiveMessage", data)
    })
})

httpServer.listen(8080, () => {
    console.log(`server running on port 8080`);
})
