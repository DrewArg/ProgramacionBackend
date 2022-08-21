import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Banner from '../components/Banner/Banner'
import FeaturedProductsContainer from '../container/FeaturedProductsContainer/FeaturedProductsContainer.jsx'
import LoginContainer from '../container/LoginContainer/LoginContainer'
import { useState } from 'react'


const Home = () => {
    const [pipActive, setPipActive] = useState(false)
    return (
        <>
            <Navbar />
            <Banner />
            <FeaturedProductsContainer />
            <LoginContainer pipActive={pipActive} />
            <button className='btn__shop'>Ver todos los productos</button>
        </>
    )
}

export default Home