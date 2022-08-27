import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import AccountInfoContainer from '../../container/AccountInfoContainer/AccountInfoContainer'
import PipContainer from '../../container/PipContainer/PipContainer'

const Account = ({ setLoginPipActive, loginPipActive, setRegisterPipActive, registerPipActive }) => {
    return (
        <>
            <Navbar setLoginPipActive={setLoginPipActive} setRegisterPipActive={setRegisterPipActive} />
            <PipContainer setLoginPipActive={setLoginPipActive} loginPipActive={loginPipActive} setRegisterPipActive={setRegisterPipActive} registerPipActive={registerPipActive} />
            <AccountInfoContainer />
        </>
    )
}

export default Account