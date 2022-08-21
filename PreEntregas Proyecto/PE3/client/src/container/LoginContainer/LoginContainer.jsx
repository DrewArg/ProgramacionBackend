import React from 'react'
import Login from '../../components/Login/Login.jsx'

const LoginContainer = ({pipActive}) => {
   
    return (
        <>
            {
                pipActive ?
                    <>
                        <Login />
                    </>
                    :
                    <>
                    </>
            }
        </>
    )
}

export default LoginContainer