import React from 'react';
import ProductListContainer from '../container/ProductListContainer/ProductListContainer';
import MessageListContainer from '../container/MessageListContainer/MessageListContainer';
import './Home.css'

const Home = () => {

    return (
        <>
            <ProductListContainer />
            <MessageListContainer />
        </>
    )
}

export default Home
