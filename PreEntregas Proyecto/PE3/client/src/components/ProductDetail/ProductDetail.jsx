import React from 'react'
import './ProductDetail.css'

const ProductDetail = ({ product }) => {
    return (
        <>
            {product ?
                <div className='productDetail'>
                    <img src={product.thumbnail} alt={product.alt} width={250} height={250} />
                    <div className='productDetail__description'>
                        <div>{product.title}</div>
                        <div>{product.price}</div>
                    </div>
                </div>
                :
                <h2>Cargando..</h2>
            }

        </>
    )
}

export default ProductDetail