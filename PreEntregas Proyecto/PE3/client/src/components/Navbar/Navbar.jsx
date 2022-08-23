import React from 'react'
import { useState } from 'react'
import { BsSearch, BsCart2 } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { FiUser } from 'react-icons/fi'
import './Navbar.css'

const Navbar = ({ setLoginPipActive, setRegisterPipActive }) => {
    const [userOptions, setUserOptions] = useState(false)
    const [loggedIn, setLoggedIn] = useState(false)

    const isLogged = async () => {
        const url = 'http://localhost:8080/auth/isLogged'

        await fetch(url, {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Origin': 'http://localhost:3000',
                'Access-Control-Allow-Methods': 'POST,GET',
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        }).then(async (r) => {
            if (r.status === 200) {
                const text = await r.text()
                if (text === 'true') {
                    setLoggedIn(true)
                } else {
                    setLoggedIn(false)
                }
            } else {
            }
        })
    }

    const logout = async () => {
        const url = 'http://localhost:8080/auth/logout'

        await fetch(url, {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Origin': 'http://localhost:3000',
                'Access-Control-Allow-Methods': 'POST,GET',
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
    }


    return (
        <>
            <div className='navbarSup'>
                <Link to={'/'}>
                    <div className='navbarSup__brand'>
                        PE3
                    </div>
                </Link>
                <div className='navbarSup__search'>
                    <form action="/" method="GET" className="navbarSup__search--form">
                        <input type="search" placeholder="Search" className="navbarSup__search--searchField" />
                        <BsSearch className='navbarSup__search--button' />
                    </form>
                </div>
                <div className='navbarSup__icons'>
                    <div className='navbarSup__icons--cart'>
                        <BsCart2 />
                    </div>
                    <div className='navbarSup__icons--user'>
                        <FiUser onClick={() => { setUserOptions(!userOptions); isLogged() }} />

                        {
                            userOptions ?
                                <>
                                    <ul className='userOptionsMenu'>
                                        {

                                            loggedIn ?
                                                <>
                                                    <Link to={'/my-account'}>
                                                        <li className='userOptionsMenu__item' onClick={() => { setUserOptions(!userOptions) }}>Mi cuenta</li>
                                                    </Link>
                                                    <Link to={'/'}>
                                                        <li className='userOptionsMenu__item' onClick={() => { logout(); setUserOptions(!userOptions) }}>Cerrar sesión</li>
                                                    </Link>
                                                </>
                                                :

                                                <>
                                                    <li className='userOptionsMenu__item' onClick={() => { setLoginPipActive(true); setRegisterPipActive(false); setUserOptions(!userOptions) }}>Ingresar</li>
                                                    <li className='userOptionsMenu__item' onClick={() => { setRegisterPipActive(true); setLoginPipActive(false); setUserOptions(!userOptions) }}>Registrarse</li>
                                                </>


                                        }
                                    </ul>
                                </> : ""
                        }
                    </div>
                </div>
            </div>

            <div className='navbarBot'>
                <ul className='navbarBot__list'>
                    <Link to={'/'}>
                        <li className='navbarBot__list--home'>Home</li>
                    </Link>
                    <Link to={'/shop'}>
                        <li className='navbarBot__list--element'>Tienda</li>
                    </Link>
                    <Link to={'/'}>
                        <li className='navbarBot__list--element'>Contacto</li>
                    </Link>
                </ul>
            </div>
        </>
    )
}

export default Navbar