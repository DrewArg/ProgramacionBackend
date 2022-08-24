import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import CartList from '../../components/CartList/CartList.jsx'

const CartListContainer = () => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])

    const [id, setId] = useState('')

    async function fetchUserId() {
        const url = 'http://localhost:8080/account/userId'

        let response = await fetch(url, {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Origin': 'http://localhost:3000',
                'Access-Control-Allow-Methods': 'POST,GET',
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })

        response = await response.json()
        console.log(response);

        setId(response)


    }

    async function getCartProducts() {
        console.log(id);
        if (id === "") {
            fetchUserId()
        } else {
            const url = `http://localhost:8080/carts/products/${id}`
            console.log(url);
            let response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Access-Control-Allow-Headers': 'Content-Type',
                    'Access-Control-Allow-Credentials': 'true',
                    'Access-Control-Allow-Origin': 'http://localhost:3000',
                    'Access-Control-Allow-Methods': 'POST,GET',
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            })
            response = await response.json()
            console.log(response);
            setProducts(response)
            setLoading(false)

        }

    }

    useEffect(() => {
        fetchUserId()
    }, [])
    return (
        <>

            {
                loading ?
                    <>
                        <h2>Cargando...</h2>
                        <button onClick={() => { getCartProducts() }}>Obtener Productos</button>
                    </>

                    :

                    <CartList products={products} />

            }
        </>
    )
}

export default CartListContainer