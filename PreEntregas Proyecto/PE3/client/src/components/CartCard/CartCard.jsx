import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import NoUserContainer from '../../container/NoUserContainer/NoUserContainer'

import './CartCard.css'

const CartCard = ({ product }) => {

    const [amount, setAmount] = useState(0)
    const [loggedIn, setLoggedIn] = useState(true)

    const handleSubstract = () => {
        if (amount <= 0) {
            setAmount(0)
        } else {
            setAmount(amount - 1)
        }
    }

    const handleAddition = () => {
        setAmount(amount + 1)
    }

    const isLogged = async () => {
        const url = 'http://localhost:8080/auth/isLogged'

        await fetch(url, {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Origin': 'http://localhost:3000',
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

    const handleAddToCart = async () => {
        await isLogged()
        if (loggedIn) {
            const url = `http://localhost:8080/carts/products/:${product.id}/:${amount}`

            await fetch(url, {
                method: 'POST',
                headers: {
                    'Access-Control-Allow-Headers': 'Content-Type',
                    'Access-Control-Allow-Credentials': 'true',
                    'Access-Control-Allow-Origin': 'http://localhost:3000',
                    'Access-Control-Allow-Methods': 'POST,GET',
                    'Content-Type': 'application/json'
                },
                credentials: 'include'

            }).then(async (r) => {
                if (r.status === 200) {
                    setAmount(0)
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
                        <tr className='cartCard'>
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
                            <td>Cantidad: ${product.quantity}</td>
                            <td className='cartCard__cartSection'>
                                <span id='amountSubstraction' onClick={() => { handleSubstract() }}>-</span>
                                <span id='amountAmount'>{amount + parseInt(product.quantity)}</span>
                                <span id='amountAddition' onClick={() => { handleAddition() }}>+</span>
                            </td>
                            {/* <td className='productCard__cartSection'>
                                <button className='btn__submit' onClick={() => { handleAddToCart() }}>Comprar!</button>
                            </td> */}
                        </tr>
                        :
                        <h2>Cargando...</h2>

                    :
                    <NoUserContainer setLoggedIn={setLoggedIn} />
            }




        </>
    )
}

export default CartCard