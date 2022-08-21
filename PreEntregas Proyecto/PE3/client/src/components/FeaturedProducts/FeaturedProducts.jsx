import React from 'react'

const FeaturedProducts = ({ products }) => {
    return (
        <>
            <div className='featuredProducts'>
                {
                    products.length > 0 ?
                        <table className='productTable'>
                            <tbody>
                                {products.map(p => { return <ProductCard key={p.id} product={p} /> })}
                            </tbody>
                        </table>
                        :
                        <h3>No hay productos destacados actualmente...</h3>
                }

            </div>
        </>
    )
}

export default FeaturedProducts