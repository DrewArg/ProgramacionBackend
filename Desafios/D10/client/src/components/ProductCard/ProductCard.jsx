import React from 'react';

function ProductCard({ prod: product }) {
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
                    <img src={product.thumbnail} alt="" width="250" height="250" />
                </td>

            </tr>

        </>
    )
}

export default ProductCard