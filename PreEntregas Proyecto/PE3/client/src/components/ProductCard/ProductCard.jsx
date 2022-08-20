import React from 'react'

const ProductCard = ({ product }) => {
    return (
        <>
            <tr>
                <td>
                    {product.title}
                </td>
                <td>
                    {product.price}
                </td>
                <td>
                    <img src={product.thumbnail} alt={product.alt} width="150" height="150" />
                </td>

            </tr>
        </>
    )
}

export default ProductCard