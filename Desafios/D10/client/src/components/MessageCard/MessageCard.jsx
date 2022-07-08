import React from 'react';
import './MessageCard.css'
function MessageCard({ msg: message }) {
    return (
        <>

            <div className='singleMessage'>
                <span className='contenidoMensaje'>
                    <img src={message.author.userAvatar} className="profileImage" alt="" />

                    <span className="msgBlue">{message.author.userAlias}</span>
                    <span>[</span>
                    <span className="msgRed">{message.timestamp}</span>
                    <span>] : </span>
                    <span className="msgGreen">{message.text}</span>

                </span>

            </div>


        </>
    )
}

export default MessageCard