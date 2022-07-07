import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import io from 'socket.io-client'

const socket = io.connect("http://localhost:8080")

const ItemListContainer = () => {

    
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])


    useEffect(() => {
        async function getProducts() {
            try {
                //acá tengo que traer los productos del socket 
            } catch (error) {

            }
        }
    })

    getProducts()
    return (
        <>
            {
                loading ? <h2>Cargando...</h2> :
                    <>
                        <ItemList products={products} />
                    </>
            }
        </>
    )
}
