import React from 'react'
import Login from '../../components/Login/Login.jsx'
import Register from '../../components/Register/Register.jsx'

const PipContainer = ({ loginPipActive, registerPipActive }) => {

    return (
        <>
            {
                loginPipActive ?

                    <Login /> :
                    registerPipActive ?

                        <Register />
                        :
                        <>
                        </>
            }
        </>
    )
}

export default PipContainer