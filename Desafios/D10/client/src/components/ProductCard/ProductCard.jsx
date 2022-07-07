import React from 'react';

function ProductCard({ prod: product }) {
    return (
        <>
            <td>
                {product.title}
            </td>
            <td>
                {product.price}
            </td>
            <td>
                <img src={product.thumbnail} alt="" width="250" height="250" />
            </td>


        </>
    )
}

export default ProductCard