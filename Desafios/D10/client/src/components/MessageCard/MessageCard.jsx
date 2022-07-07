import React from 'react';

function MessageCard({ msg: message }) {
    return (
        <>

            <p><span class="msgBlue">{message.author.userAlias}</span> [<span class="msgRed">{message.timestamp}</span>] : <span
                class="msgGreen">{message.text}</span><img src={message.author.userAvatar} width="50" height="50" /></p>


        </>
    )
}

export default MessageCard