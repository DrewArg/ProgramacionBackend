import React from 'react'
import Login from '../../components/Login/Login.jsx'
import Register from '../../components/Register/Register.jsx'

const PipContainer = ({ loginPipActive, setLoginPipActive, registerPipActive, setRegisterPipActive }) => {

    return (
        <>
            {
                loginPipActive ?

                    <Login setLoginPipActive={setLoginPipActive} /> :
                    registerPipActive ?

                        <Register setRegisterPipActive={setRegisterPipActive} />
                        :
                        <>
                        </>
            }
        </>
    )
}

export default PipContainer