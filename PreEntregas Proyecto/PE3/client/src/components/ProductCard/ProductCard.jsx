import React from 'react'
import { Link } from 'react-router-dom'
import './ProductCard.css'

const ProductCard = ({ product }) => {
    return (
        <>
            {product ?
                <tr>
                    <Link className='productCard' to={`/products/:${product.id}`}>
                        <td>
                            <img src={product.thumbnail} alt={product.alt} width="250" height="250" />
                        </td>
                        <td>
                            {product.title}
                        </td>
                        <td>
                            ${product.price}
                        </td>
                    </Link>
                </tr>
                : <h2>Cargando...</h2>
            }

        </>
    )
}

export default ProductCard