import React from 'react'
import io from 'socket.io-client'

export const socket = io.connect("https://localhost:8080/")

export const SocketContext = React.createContext()