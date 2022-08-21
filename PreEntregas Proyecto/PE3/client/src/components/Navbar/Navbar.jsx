import React from 'react'
import { useState } from 'react'
import { BsSearch, BsCart2 } from 'react-icons/bs'
import { FiUser } from 'react-icons/fi'
import './Navbar.css'

const Navbar = ({ setLoginPipActive, setRegisterPipActive }) => {
    const [userOptions, setUserOptions] = useState(false)
    return (
        <>
            <div className='navbarSup'>
                <div className='navbarSup__brand'>
                    PE3
                </div>
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
                        <FiUser onClick={() => { setUserOptions(!userOptions) }} />
                        {
                            userOptions ?
                                <>
                                    <ul className='userOptionsMenu'>
                                        <li className='userOptionsMenu__item' onClick={() => { setLoginPipActive(true); setRegisterPipActive(false) }}>Ingresar</li>
                                        <li className='userOptionsMenu__item' onClick={() => { setRegisterPipActive(true); setLoginPipActive(false) }}>Registrarse</li>
                                    </ul>
                                </>
                                : ""
                        }
                    </div>
                </div>
            </div>

            <div className='navbarBot'>
                <ul className='navbarBot__list'>
                    <li className='navbarBot__list--home'>Home</li>
                    <li className='navbarBot__list--element'>Tienda</li>
                    <li className='navbarBot__list--element'>Contacto</li>
                </ul>
            </div>
        </>
    )
}

export default Navbar