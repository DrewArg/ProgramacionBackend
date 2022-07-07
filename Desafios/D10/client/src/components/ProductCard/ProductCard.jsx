import React from 'react';

function ProductCard({ prod: product }) {
    return (
        <>
            <table class="productTable">
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Imágen</th>
                </tr>
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
            </table >
        </>
    )
}

export default ProductCard