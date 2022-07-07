import React from 'react'

function MessageForm() {
    return (
        <>
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
        </>
    )
}

export default MessageForm