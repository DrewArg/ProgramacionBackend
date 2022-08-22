import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import FeaturedProductsContainer from '../../container/FeaturedProductsContainer/FeaturedProductsContainer.jsx'
import PipContainer from '../../container/PipContainer/PipContainer'
import { useState } from 'react'
import { useEffect } from 'react'


const Home = ({ setLoginPipActive, loginPipActive, setRegisterPipActive, registerPipActive }) => {


    return (
        <>
            <Navbar setLoginPipActive={setLoginPipActive} setRegisterPipActive={setRegisterPipActive} />
            <Banner />
            <FeaturedProductsContainer />
            <PipContainer setLoginPipActive={setLoginPipActive} loginPipActive={loginPipActive} setRegisterPipActive={setRegisterPipActive} registerPipActive={registerPipActive} />
            <button className='btn__shop'>Ver todos los productos</button>
        </>
    )
}

export default Home