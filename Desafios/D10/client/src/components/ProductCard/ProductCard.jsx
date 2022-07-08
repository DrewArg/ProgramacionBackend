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
                    <img src={product.thumbnail} alt="" width="150" height="150" />
                </td>

            </tr>

        </>
    )
}

export default ProductCard