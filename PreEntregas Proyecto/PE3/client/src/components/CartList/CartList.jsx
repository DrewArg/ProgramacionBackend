import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import CartCard from '../CartCard/CartCard.jsx'
import { useNavigate } from 'react-router-dom'
import NoUserContainer from '../../container/NoUserContainer/NoUserContainer'

import './CartList.css'

const CartList = ({ products }) => {
    const [loggedIn, setLoggedIn] = useState(false)
    // const [cartTotal, setCartTotal] = useState(0)

    const navigate = useNavigate()

    const endBuy = async (products) => {
        const url = `${process.env.REACT_APP_SERVER_URL}/carts/sendEmail`

        const body = JSON.stringify(products)

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
        })

    }

    const isLogged = async () => {
        if (!loggedIn) {
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

    }


    useEffect(() => {
        isLogged()
    })

    return (
        <>
            <div id='cartTable'>
                {
                    loggedIn ?

                        products.length > 0 ?
                            <>

                                <table className='cartTable'>
                                    <thead >
                                        <tr className='cartTable__header'>
                                            <th id='th0'></th>
                                            <th id='th1'>Nombre de producto</th>
                                            <th id='th2'>Unidades</th>
                                            <th id='th3'>Precio unitario</th>
                                            <th id='th4'>Precio total</th>
                                        </tr>
                                    </thead>
                                    <tbody className='cartTable__body'>
                                        {products.map(p => {
                                            return (
                                                <tr key={p.id} className='cartCard'>
                                                    <CartCard key={p.id} product={p} />
                                                </tr>
                                            )
                                        })}

                                    </tbody>
                                </table>
                                <button className='btn__submit' onClick={() => { endBuy(products) }}>Finalizar Compra</button>
                                <button className='btn__submit' onClick={() => { navigate("/shop") }}>Continuar comprando</button>
                            </>
                            :
                            <>
                                <h2>Ups.. parece que tu carrito está vacio.</h2>
                                <h3>Pasa por la tienda para llenarlo</h3>

                                <button className='btn__submit' onClick={() => { navigate("/shop") }}>Tienda</button>
                            </>
                        :
                        <NoUserContainer loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
                }
            </div>


        </>
    )
}

export default CartList