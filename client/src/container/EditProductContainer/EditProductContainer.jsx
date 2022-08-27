import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { SocketContext } from '../../context/Socket.jsx'
import EditProductList from '../../components/EditProductList/EditProductList'
import './EditProductContainer.css'

const EditProductContainer = () => {
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
            setLoading(false)
        })
    }, [reactSocket, request])


    return (
        <>
            <h2 className='ep__title'>Editar productos</h2>
            <h3 className='ep__subtitle'>Para cargar la información editada, deberás refrescar la página.</h3>
            {
                loading ?
                    <h2>Cargando...</h2>

                    :
                    <EditProductList products={products} />
            }
        </>
    )
}

export default EditProductContainer