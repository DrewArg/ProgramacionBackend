import React from 'react'
import { useState } from 'react'
import Login from '../../components/Login/Login.jsx'
import Register from '../../components/Register/Register.jsx'
import { ImCross } from 'react-icons/im'
import './NoUserContainer.css'

const NoUserContainer = ({ loggedIn, setLoggedIn }) => {
    const [loginPipActive, setLoginPipActive] = useState(false)
    const [registerPipActive, setRegisterPipActive] = useState(false)
    return (
        <>


            {loggedIn ? "" :

                loginPipActive ?

                    <Login setLoginPipActive={setLoginPipActive} />

                    : registerPipActive ?

                        <Register setRegisterPipActive={setRegisterPipActive} />

                        :
                        <>
                            <div className='noUserContainer'>
                                <ImCross className='noUserContainer__exit' onClick={() => { setLoggedIn(true) }} />
                                <div className='noUserContainer__description'>
                                    ¡Buenas! Para agregar items a tu carrito primero debes ingresar.
                                </div>
                                <div className='noUserContainer__btns'>
                                    <button className='btn__submit' onClick={() => {
                                        setLoginPipActive(true);
                                    }}>Ingresar</button>
                                    <button className='btn__submit' onClick={() => { setRegisterPipActive(true); }}>Registrarse</button>
                                </div>
                            </div>
                            <div className='pipBackground'>

                            </div>
                        </>
            }


        </>
    )
}

export default NoUserContainer