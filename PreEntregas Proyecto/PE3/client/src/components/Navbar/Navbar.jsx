import React from 'react'
import { BsSearch, BsCart2 } from 'react-icons/bs'
import { FiUser } from 'react-icons/fi'
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <div className='navbarSup'>
                <div className='navbarSup__brand'>
                    PE3
                </div>
                <div className='navbarSup__search'>
                    <form action="/" method="GET" class="navbarSup__search--form">
                        <input type="search" placeholder="Search" class="navbarSup__search--searchField" />
                        <BsSearch className='navbarSup__search--button' />
                    </form>
                </div>
                <div className='navbarSup__icons'>
                    <div className='navbarSup__icons--cart'>
                        <BsCart2 />
                    </div>
                    <div className='navbarSup__icons--user'>
                        <FiUser />
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