import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import PipContainer from '../../container/PipContainer/PipContainer'
import CartListContainer from '../../container/CartListContainer/CartListContainer'

const Cart = ({ setLoginPipActive, loginPipActive, setRegisterPipActive, registerPipActive }) => {
   
    return (
        <>
            <Navbar setLoginPipActive={setLoginPipActive} setRegisterPipActive={setRegisterPipActive} />
            <PipContainer setLoginPipActive={setLoginPipActive} loginPipActive={loginPipActive} setRegisterPipActive={setRegisterPipActive} registerPipActive={registerPipActive} />
            <CartListContainer />
        </>
    )
}

export default Cart