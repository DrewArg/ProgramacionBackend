import React from 'react';
import MessageCard from '../MessageCard/MessageCard'

function MessageList({ messages }) {
    return (
        <>
            <div id="globalChat">
                <h3 class="tituloSeccion">Centro de Mensajes</h3>
                <button id="btn__testUserData" class="btn__submit" onclick="getMockUserData()">Get user mock data</button>
                <div class="chatContainer">
                    <div class="header">
                        <label class="chatLabel">Ingrese su nombre</label>
                        <input type="text" id="userName" class="formInupt" placeholder="name" />
                    </div>
                    <div class="header">
                        <label class="chatLabel">Ingrese su apellido</label>
                        <input type="text" id="userLastName" class="formInupt" placeholder="last name" />
                    </div>
                    <div class="header">
                        <label class="chatLabel">Ingrese su edad</label>
                        <input type="number" id="userAge" class="formInupt" placeholder="age" />
                    </div>
                    <div class="header">
                        <label class="chatLabel">Ingrese su email</label>
                        <input type="text" id="userEmail" class="formInupt" placeholder="email" />
                    </div>
                    <div class="header">
                        <label class="chatLabel">Ingrese su alias</label>
                        <input type="text" id="userAlias" class="formInupt" placeholder="alias" />
                    </div>
                    <div class="header">
                        <label class="chatLabel">Ingrese su avatar</label>
                        <input type="text" id="userAvatar" class="formInupt" placeholder="avatar" />
                    </div>
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