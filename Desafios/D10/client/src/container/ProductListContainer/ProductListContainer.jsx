import React from 'react';
import { useState, useEffect, useContext } from 'react'
import { SocketContext } from '../../context/Socket';
import ProductList from '../../components/ProductList/ProductList'

const ProductListContainer = () => {

    const reactSocket = useContext(SocketContext)
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
    const [request, setRequest] = useState(false)

    useEffect(() => {
        console.log(request);
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
                        <ProductList products={products} />
                    </>
            }
        </>
    )
}

export default ProductListContainer
