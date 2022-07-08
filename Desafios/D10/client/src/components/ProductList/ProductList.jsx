import React from 'react';

import ProductCard from '../ProductCard/ProductCard'
import ProductForm from '../ProductForm/ProductForm';
import './ProductList.css'

function ProductList({ products }) {
    return (
        <>
            < ProductForm />
            <div id='productTable'>
                {
                    products.length > 0 ?
                        <table className="productTable">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Precio</th>
                                    <th>Imágen</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map(p => { return <ProductCard key={p.id} prod={p} /> })}
                            </tbody>
                        </table>
                        :
                        <h3> no hay productos en el sistema actualmente...</h3>
                }
            </div>

        </>
    )
}

export default ProductList