import React from 'react'
import ProductForm from '../ProductForm/ProductForm.jsx'
import ProductCard from '../ProductCard/ProductCard.jsx'

const ProductList = ({ products }) => {
    //TODO solo mostrar el product form si es admin
    return (
        <>
            <ProductForm />
            <div id='productTable'>
                {
                    products.length > 0 ?
                        <table className='productTable'>
                            <thead>
                                <tr>
                                    <th>Producto</th>
                                    <th>Precio</th>
                                    <th>Imágen</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map(p => { return <ProductCard key={p.id} product={p} /> })}
                            </tbody>
                        </table>
                        :
                        <h3>No hay productos en el sistema actualmente...</h3>
                }
            </div>
        </>
    )
}

export default ProductList