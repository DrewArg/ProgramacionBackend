import React from 'react';
import { useState, useEffect, useContext } from 'react'
import { SocketContext } from '../../context/Socket';
import MessageCard from '../MessageCard/MessageCard'

function MessageList({ messages }) {
    const [userEmail, setUserEmail] = useState("")
    const [userName, setUserName] = useState("")
    const [userLastName, setUserLastName] = useState("")
    const [userAge, setUserAge] = useState(0)
    const [userAlias, setUserAlias] = useState("")
    const [userAvatar, setUserAvatar] = useState("")
    const [text, setText] = useState("")

    const reactSocket = useContext(SocketContext)


    useEffect(() => {
        reactSocket.on("mockUserData", (mockUserData) => {
            setUserEmail(mockUserData.userEmail)
            setUserName(mockUserData.userName)
            setUserLastName(mockUserData.userLastName)
            setUserAge(mockUserData.userAge)
            setUserAlias(mockUserData.userAlias)
            setUserAvatar(mockUserData.userAvatar)
        })
    })

    const getMockUserData = async () => {
        reactSocket.emit("getMockUserData")
    }

    const getTimestamp = () => {
        const date = new Date();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const year = date.getFullYear();
        const hour = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const builtDate = day + "/" + month + "/" + year + " " + hour + ":" + minutes + ":" + seconds;
        return builtDate;
    }

    const sendMessage = async () => {
        console.log(text);
        const message = {
            author: {
                userEmail: userEmail,
                userName: userName,
                userLastName: userLastName,
                userAge: userAge,
                userAlias: userAlias,
                userAvatar: userAvatar
            },
            text: text,
            timestamp: getTimestamp()
        }
        reactSocket.emit("saveMessage", message)

        setText("")

    }

    const handleOnChange = () => {

    }

    return (
        <>
            <div id="globalChat">
                <h3 className="tituloSeccion">Centro de Mensajes</h3>
                <button id="btn__testUserData" className="btn__submit" onClick={getMockUserData}>Get user mock data</button>
                <div className="chatContainer">
                    <div className="header">
                        <label className="chatLabel">Ingrese su nombre</label>
                        <input type="text" id="userName" className="formInupt" placeholder="name" value={userName} onChange={handleOnChange} />
                    </div>
                    <div className="header">
                        <label className="chatLabel">Ingrese su apellido</label>
                        <input type="text" id="userLastName" className="formInupt" placeholder="last name" value={userLastName} onChange={handleOnChange} />
                    </div>
                    <div className="header">
                        <label className="chatLabel">Ingrese su edad</label>
                        <input type="number" id="userAge" className="formInupt" placeholder="age" value={userAge} onChange={handleOnChange} />
                    </div>
                    <div className="header">
                        <label className="chatLabel">Ingrese su email</label>
                        <input type="text" id="userEmail" className="formInupt" placeholder="email" value={userEmail} onChange={handleOnChange} />
                    </div>
                    <div className="header">
                        <label className="chatLabel">Ingrese su alias</label>
                        <input type="text" id="userAlias" className="formInupt" placeholder="alias" value={userAlias} onChange={handleOnChange} />
                    </div>
                    <div className="header">
                        <label className="chatLabel">Ingrese su avatar</label>
                        <input type="text" id="userAvatar" className="formInupt" placeholder="avatar" value={userAvatar} onChange={handleOnChange} />
                    </div>
                    {messages.length ?
                        <>
                            <div className="chatMessages">
                                {messages.map(m => { return <MessageCard key={m.id} msg={m} /> })}
                                <div className="userMessage">

                                    <input type="text" id="msgContent" className="formInupt" placeholder="ingresa el mensaje" value={text} onInput={e => setText(e.target.value)} />
                                    <button id="btn__sendMessage" onClick={sendMessage}>Send!</button>
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <div className="chatMessages">
                                <p className="mensajesFaltantes">no hay mensajes en el sistema actualmente...</p>
                            </div>
                            <div className="userMessage">
                                <input type="text" id="msgContent" className="formInupt" placeholder="ingresa el mensaje" value={text} onInput={e => setText(e.target.value)} />
                                <button id="btn__sendMessage" onClick={sendMessage}>Send!</button>

                            </div>
                        </>

                    }

                </div>
            </div>
        </>
    )
}

export default MessageList