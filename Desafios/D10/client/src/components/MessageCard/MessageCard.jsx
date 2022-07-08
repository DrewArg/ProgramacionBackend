import React from 'react';
import './MessageCard.css'
function MessageCard({ msg: message }) {
    return (
        <>

            <div className='singleMessage'>
                <img src={message.author.userAvatar} className="profileImage" alt="" />
                <div className="msgBlue">{message.author.userAlias}</div>
                <div>[</div>
                <div className="msgRed">{message.timestamp}</div>
                <div>] :</div>
                <div className="msgGreen">{message.text}</div>
            </div>


        </>
    )
}

export default MessageCard