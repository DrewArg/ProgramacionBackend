import React from 'react';
import ProductCard from '../ProductCard/ProductCard'
import ProductForm from '../ProductForm/ProductForm';

function ProductList({ products }) {
    return (
        <>
            <ProductForm />
            <div id='productTable'>
                <table class="productTable">
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Imágen</th>
                    </tr>
                    <tr>
                        {products.map(p => { return <ProductCard key={p.id} prod={p} /> })}
                    </tr>
                </table >
            </div>
        </>
    )
}

export default ProductList