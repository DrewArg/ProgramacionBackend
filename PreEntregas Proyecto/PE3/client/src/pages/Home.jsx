import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Banner from '../components/Banner/Banner'
import FeaturedProductsContainer from '../container/FeaturedProductsContainer/FeaturedProductsContainer.jsx'
import PipContainer from '../container/PipContainer/PipContainer'
import { useState } from 'react'


const Home = () => {
    const [loginPipActive, setLoginPipActive] = useState(false)
    const [registerPipActive, setRegisterPipActive] = useState(false)
    return (
        <>
            <Navbar setLoginPipActive={setLoginPipActive} setRegisterPipActive={setRegisterPipActive} />
            <Banner />
            <FeaturedProductsContainer />
            <PipContainer loginPipActive={loginPipActive} registerPipActive={registerPipActive} />
            <button className='btn__shop'>Ver todos los productos</button>
        </>
    )
}

export default Home