import React from 'react';
import ProductCard from '../ProductCard/ProductCard'
import ProductForm from '../ProductForm/ProductForm';

function ProductList({ products }) {
    return (
        <>
            <ProductForm />
            <div id='productTable'>
                <table className="productTable">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Imágen</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {products.map(p => { return <ProductCard key={p.id} prod={p} /> })}
                        </tr>
                    </tbody>
                </table >
            </div>
        </>
    )
}

export default ProductList