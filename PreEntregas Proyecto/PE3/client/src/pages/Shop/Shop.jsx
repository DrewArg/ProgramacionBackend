import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ProductListContainer from '../../container/ProductListContainer/ProductListContainer.jsx'
import PipContainer from '../../container/PipContainer/PipContainer'


const Shop = ({ setLoginPipActive, loginPipActive, setRegisterPipActive, registerPipActive }) => {
    return (
        <>
            <Navbar setLoginPipActive={setLoginPipActive} setRegisterPipActive={setRegisterPipActive} />
            <PipContainer setLoginPipActive={setLoginPipActive} loginPipActive={loginPipActive} setRegisterPipActive={setRegisterPipActive} registerPipActive={registerPipActive} />
            <ProductListContainer />
        </>
    )
}

export default Shop