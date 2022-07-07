import React from 'react'

function MessageForm() {
    return (
        <>
            <div className="header">
                <label className="chatLabel">Ingrese su nombre</label>
                <input type="text" id="userName" className="formInupt" placeholder="name" />
            </div>
            <div className="header">
                <label className="chatLabel">Ingrese su apellido</label>
                <input type="text" id="userLastName" className="formInupt" placeholder="last name" />
            </div>
            <div className="header">
                <label className="chatLabel">Ingrese su edad</label>
                <input type="number" id="userAge" className="formInupt" placeholder="age" />
            </div>
            <div className="header">
                <label className="chatLabel">Ingrese su email</label>
                <input type="text" id="userEmail" className="formInupt" placeholder="email" />
            </div>
            <div className="header">
                <label className="chatLabel">Ingrese su alias</label>
                <input type="text" id="userAlias" className="formInupt" placeholder="alias" />
            </div>
            <div className="header">
                <label className="chatLabel">Ingrese su avatar</label>
                <input type="text" id="userAvatar" className="formInupt" placeholder="avatar" />
            </div>
        </>
    )
}

export default MessageForm