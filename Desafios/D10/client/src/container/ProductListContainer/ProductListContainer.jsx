import React from 'react';
import { useContext } from 'react'
import { useState, useEffect } from 'react'
import { SocketContext } from '../../context/Socket';
import ProductList from '../../components/ProductList/ProductList'

const ProductListContainer = () => {

    const reactSocket = useContext(SocketContext)
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
    const [request, setRequest] = useState(false)

    useEffect(() => {

        if (!request) {
            reactSocket.emit("getAllProducts")
            setRequest(true)
        }

        reactSocket.on("products", (prods) => {
            setProducts(prods)
            setLoading(false);
        })
    })

    return (
        <>
            {
                loading ? <h2>Cargando...</h2> :
                    <>
                        {products.length > 0 ? <ProductList products={products} />

                            : <h3>no hay productos en el sistema actualmente...</h3>
                        }
                    </>
            }
        </>
    )
}

export default ProductListContainer
