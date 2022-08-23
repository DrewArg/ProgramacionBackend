import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import PipContainer from '../../container/PipContainer/PipContainer'
import ProductDetailContainer from '../../container/ProductDetailContainer/ProductDetailContainer'



const Detail = ({ setLoginPipActive, loginPipActive, setRegisterPipActive, registerPipActive }) => {
    return (
        <>
            <Navbar setLoginPipActive={setLoginPipActive} setRegisterPipActive={setRegisterPipActive} />
            <PipContainer setLoginPipActive={setLoginPipActive} loginPipActive={loginPipActive} setRegisterPipActive={setRegisterPipActive} registerPipActive={registerPipActive} />
            <ProductDetailContainer />
        </>
    )
}

export default Detail