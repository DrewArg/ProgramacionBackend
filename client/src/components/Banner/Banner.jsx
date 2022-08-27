import React from 'react'
import { Link } from 'react-router-dom'
import './Banner.css'

const Banner = () => {
    return (
        <>
            <div className='banner'>
                <h1>Muebles para tu hogar</h1>
                <Link to={'/shop'}>
                    <button>Ver tienda</button>
                </Link>
            </div>
        </>
    )
}

export default Banner