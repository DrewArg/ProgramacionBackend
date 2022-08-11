import React from 'react'
import io from 'socket.io-client'
// import { SOCKET_URL } from 'config'

export const socket = io.connect("http://localhost:8080")

export const SocketContext = React.createContext()
