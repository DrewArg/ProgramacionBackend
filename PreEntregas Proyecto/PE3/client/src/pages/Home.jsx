import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Banner from '../components/Banner/Banner'
import FeaturedProductsContainer from '../container/FeaturedProductsContainer/FeaturedProductsContainer.jsx'

const Home = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <FeaturedProductsContainer />
            <button className='btn__shop'>Ver todos los productos</button>
        </>
    )
}

export default Home