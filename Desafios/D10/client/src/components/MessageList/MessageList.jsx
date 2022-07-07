import React from 'react';
import MessageCard from '../MessageCard/MessageCard'
import MessageForm from '../MessageForm/MessageForm'

function MessageList({ messages }) {
    return (
        <>
            <div id="globalChat">
                <h3 class="tituloSeccion">Centro de Mensajes</h3>
                <button id="btn__testUserData" class="btn__submit" onclick="getMockUserData()">Get user mock data</button>
                <div class="chatContainer">
                    <MessageForm />
                    {messages.length ?
                        <>
                            <div class="chatMessages">
                                {messages.map(m => { return <MessageCard key={m.id} msg={m} /> })}
                                <div class="userMessage">

                                    <input type="text" id="msgContent" class="formInupt" placeholder="ingresa el mensaje" />
                                    <button id="btn__sendMessage">Send!</button>
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <div class="chatMessages">
                                <p class="mensajesFaltantes">no hay mensajes en el sistema actualmente...</p>
                            </div>
                            <div class="userMessage">
                                <input type="text" id="msgContent" class="formInupt" placeholder="ingresa el mensaje" />
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