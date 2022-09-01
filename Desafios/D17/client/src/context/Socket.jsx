import React from 'react'
import io from 'socket.io-client'
// import { SOCKET_URL } from 'config'

export const socket = io.connect("https://backend-desafio15.herokuapp.com/")

export const SocketContext = React.createContext()
