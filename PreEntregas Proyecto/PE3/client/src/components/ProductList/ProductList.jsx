import React from 'react'
import ProductCard from '../ProductCard/ProductCard.jsx'
import './ProductList.css'

const ProductList = ({ products }) => {


    return (
        <>

            <div id='productTable'>
                {
                    products.length > 0 ?

                        <table className='productTable'>
                            <tbody className='productTable__body'>
                                {products.map(p => {
                                    return (
                                        <>
                                            <ProductCard key={p.id} product={p} />
                                        </>
                                    )
                                })}
                            </tbody>
                        </table>
                        :
                        <h3>No hay productos en el sistema actualmente...</h3>
                }
            </div>
        </>
    )
}

export default ProductList