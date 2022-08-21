import React from 'react'
import { SocketContext } from '../../context/Socket'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts.jsx'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
const FeaturedProductsContainer = () => {
    const reactSocket = useContext(SocketContext)
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
    const [request, setRequest] = useState(false)

    useEffect(() => {
        if (!request) {
            reactSocket.emit("getFeaturedProducts")
            setRequest(true)
        }

        reactSocket.on("featuredProducts", (prods) => {
            setProducts(prods)
            setLoading(false)
        })
    }, [reactSocket, request])
    return (
        <>
            {
                loading ?
                    <h2>Cargando...</h2>
                    :
                    <FeaturedProducts products={products} />
            }
        </>
    )
}

export default FeaturedProductsContainer