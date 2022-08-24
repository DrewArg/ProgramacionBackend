import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import CartList from '../../components/CartList/CartList.jsx'

const CartListContainer = () => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])

    async function getCartProducts() {

        const url = `http://localhost:8080/carts/products`
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
        setProducts(response)
        setLoading(false)


    }

    useEffect(() => {
        getCartProducts()
    }, [])
    return (
        <>

            {
                loading ?
                    <>
                        <h2>Cargando...</h2>
                    </>

                    :

                    <CartList products={products} />

            }
        </>
    )
}

export default CartListContainer