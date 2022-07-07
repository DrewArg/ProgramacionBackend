import React from 'react';
import MessageCard from '../MessageCard/MessageCard'
import MessageForm from '../MessageForm/MessageForm'

function MessageList({ messages }) {

    async function getMockUserData() {

    }

    return (
        <>
            <div id="globalChat">
                <h3 className="tituloSeccion">Centro de Mensajes</h3>
                <button id="btn__testUserData" className="btn__submit" onClick={() => { getMockUserData() }}>Get user mock data</button>
                <div className="chatContainer">
                    <MessageForm />
                    {messages.length ?
                        <>
                            <div className="chatMessages">
                                {messages.map(m => { return <MessageCard key={m.id} msg={m} /> })}
                                <div className="userMessage">

                                    <input type="text" id="msgContent" className="formInupt" placeholder="ingresa el mensaje" />
                                    <button id="btn__sendMessage">Send!</button>
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <div className="chatMessages">
                                <p className="mensajesFaltantes">no hay mensajes en el sistema actualmente...</p>
                            </div>
                            <div className="userMessage">
                                <input type="text" id="msgContent" className="formInupt" placeholder="ingresa el mensaje" />
                                <button id="btn__sendMessage">Send!</button>

                            </div>
                        </>

                    }

                </div>
            </div>
        </>
    )
}

export default MessageList