import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import ProductListContainer from '../../container/ProductListContainer/ProductListContainer';
import '../../style/style.css'

function Products() {
    return (
        <>
            <NavBar />
            <ProductListContainer />
        </>
    )
}

export default Products