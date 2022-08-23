import React from 'react'
import './ProductCard.css'

const ProductCard = ({ product }) => {
    return (
        <>
            <tr className='productCard'>
                <td>
                    <img src={product.thumbnail} alt={product.alt} width="250" height="250" />
                </td>
                <td>
                    {product.title}
                </td>
                <td>
                    ${product.price}
                </td>

            </tr>
        </>
    )
}

export default ProductCard