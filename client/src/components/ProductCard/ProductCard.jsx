import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import NoUserContainer from '../../container/NoUserContainer/NoUserContainer'

import './ProductCard.css'

const ProductCard = ({ product }) => {

    const [amount, setAmount] = useState(1)
    const [loggedIn, setLoggedIn] = useState(true)

    const handleSubstract = () => {
        if (amount <= 1) {
            setAmount(1)
        } else {
            setAmount(amount - 1)
        }
    }

    const handleAddition = () => {
        setAmount(amount + 1)
    }

    const isLogged = async () => {
        const url = `${process.env.REACT_APP_SERVER_URL}/auth/isLogged`

        await fetch(url, {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Origin': `${process.env.REACT_APP_CLIENT_URL}`,
                'Access-Control-Allow-Methods': 'POST,GET',
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        }).then(async (r) => {
            if (r.status === 200) {
                const text = await r.text()
                if (text === 'true') {
                    setLoggedIn(true)
                } else {
                    setLoggedIn(false)
                }
            } else {
            }
        })
    }

    const handleAddToCart = async (id) => {
        await isLogged()
        if (loggedIn) {

            const url = `${process.env.REACT_APP_SERVER_URL}/carts/products/add-product`

            const addProd = {
                prodId: id,
                quantity: amount
            }

            const body = JSON.stringify(addProd)

            await fetch(url, {
                method: 'POST',
                body: body,
                headers: {
                    'Access-Control-Allow-Headers': 'Content-Type',
                    'Access-Control-Allow-Credentials': 'true',
                    'Access-Control-Allow-Origin': `${process.env.REACT_APP_CLIENT_URL}`,
                    'Access-Control-Allow-Methods': 'POST,GET',
                    'Content-Type': 'application/json'
                },
                credentials: 'include'

            }).then(async (r) => {
                if (r.status === 200) {
                    setAmount(1)
                }
            })


        } else {
            console.log("not logged ");
        }



    }
    return (
        <>
            {
                loggedIn ?

                    product ?


                        <tr key={`row-${product.id}`} className='productCard'>
                            <td>
                                <Link to={`/products/:${product.id}`}>
                                    <img src={product.thumbnail} alt={product.alt} width="250" height="250" />
                                </Link>
                            </td>
                            <td>
                                {product.title}
                            </td>
                            <td>
                                ${product.price}
                            </td>
                            <td className='productCard__cartSection'>
                                <span id='amountSubstraction' onClick={() => { handleSubstract() }}>-</span>
                                <span id='amountAmount'>{amount}</span>
                                <span id='amountAddition' onClick={() => { handleAddition() }}>+</span>
                            </td>
                            <td className='productCard__cartSection'>
                                <button className='btn__submit' onClick={() => { handleAddToCart(product.id) }}>Agregar al carrito</button>
                            </td>
                        </tr>
                        :
                        <h2>Cargando...</h2>

                    :
                    <NoUserContainer setLoggedIn={setLoggedIn} />
            }




        </>
    )
}

export default ProductCard