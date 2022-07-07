import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import MessageListContainer from '../../container/MessageListContainer/MessageListContainer';
import '../Home/Home.css'

function Messages() {
    return (
        <>
            <NavBar />
            <MessageListContainer />
        </>
    )
}

export default Messages