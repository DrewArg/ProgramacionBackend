import React from 'react'
import ProductCard from '../ProductCard/ProductCard.jsx'
import './FeaturedProducts.css'

const FeaturedProducts = ({ products }) => {
    return (
        <>
            <div className='featuredProducts'>
                {
                    products.length > 0 ?
                        <table className='featuredTable'>
                            <tbody className='featuredTable__body'>
                                {products.map(p => { return <ProductCard key={p.id} product={p} /> })}
                            </tbody>
                        </table>
                        :
                        <h3>No hay productos destacados actualmente...</h3>
                }
            </div>
        </>
    )
}

export default FeaturedProducts