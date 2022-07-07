import React from 'react';
import { useContext } from 'react'
import { useState, useEffect } from 'react'
import { SocketContext } from '../../context/Socket';
import MessageList from '../../components/MessageList/MessageList'

const MessageListContainer = () => {

    const reactSocket = useContext(SocketContext)
    const [loading, setLoading] = useState(true)
    const [messages, setMessages] = useState([])
    const [request, setRequest] = useState(false)

    useEffect(() => {

        if (!request) {
            reactSocket.emit("getAllMessages")
            setRequest(true)
        }

        reactSocket.on("messages", (mssgs) => {
            setMessages(mssgs)
            setLoading(false);
        })
    })

    return (
        <>
            {
                loading ? <h2>Cargando...</h2> :
                    <>
                        {messages.length > 0 ? <MessageList messages={messages} />

                            : <h3>no hay mensajes en el sistema actualmente...</h3>
                        }
                    </>
            }
        </>
    )
}

export default MessageListContainer
