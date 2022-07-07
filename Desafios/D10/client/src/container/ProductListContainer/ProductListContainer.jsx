import React from 'react';
import { useContext } from 'react'
import { useState, useEffect } from 'react'
import { SocketContext, socket } from '../../context/Socket';
import ProductList from '../../components/ProductList/ProductList'

const ProductListContainer = () => {

    const reactSocket = useContext(SocketContext)
    const [connection, setConnection] = useState(false)

    const handleNewConnection = () => {
        setConnection(true)
    }
    
    useEffect(() => {
        // socket.emit("new connection", socket.id)
        socket.on("helloFromBackend", () => {
            console.log("backend connected");
            socket.emit("helloFromReact")
        })
    })

    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])


    useEffect(() => {
        async function getProducts() {
            try {
                //acá tengo que traer los productos del socket 
            } catch (error) {

            }

            setLoading(false)
        }

        getProducts()
    })


    return (
        <>
            {
                loading ? <h2>Cargando...</h2> :
                    <>
                        {(products.length > 0) ? <ProductList products={products} />

                            : <h3>no hay productos en el sistema actualmente...</h3>
                        }
                    </>
            }
        </>
    )
}

export default ProductListContainer
