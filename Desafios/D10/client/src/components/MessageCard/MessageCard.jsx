import React from 'react';

function MessageCard({ msg: message }) {
    return (
        <>

            <p><span className="msgBlue">{message.author.userAlias}</span> [<span className="msgRed">{message.timestamp}</span>] : <span
                className="msgGreen">{message.text}</span><img src={message.author.userAvatar} width="50" height="50" alt="" /></p>


        </>
    )
}

export default MessageCard