import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import FeaturedProductsContainer from '../../container/FeaturedProductsContainer/FeaturedProductsContainer.jsx'
import PipContainer from '../../container/PipContainer/PipContainer'
import { Link } from 'react-router-dom'




const Home = ({ setLoginPipActive, loginPipActive, setRegisterPipActive, registerPipActive }) => {


    return (
        <>
            <Navbar setLoginPipActive={setLoginPipActive} setRegisterPipActive={setRegisterPipActive} />
            <Banner />
            <FeaturedProductsContainer />
            <PipContainer setLoginPipActive={setLoginPipActive} loginPipActive={loginPipActive} setRegisterPipActive={setRegisterPipActive} registerPipActive={registerPipActive} />
            <Link to={'/shop'}>
                <button className='btn__shop'>Ver todos los productos</button>
            </Link>
        </>
    )
}

export default Home