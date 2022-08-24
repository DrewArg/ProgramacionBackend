import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import CartCard from '../CartCard/CartCard.jsx'
import NoUserContainer from '../../container/NoUserContainer/NoUserContainer'

import './CartList.css'

const CartList = ({ products }) => {
    const [loggedIn, setLoggedIn] = useState(false)

    const isLogged = async () => {
        if (!loggedIn) {
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

    }


    useEffect(() => {
        console.log(loggedIn);
    }, [isLogged])

    return (
        <>
            <div id='cartTable'>
                {
                    loggedIn ?
                        <table className='cartTable'>
                            <thead >
                                <tr className='cartTable__header'>
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
                        :
                        <NoUserContainer setLoggedIn={setLoggedIn} />
                }
            </div>


        </>
    )
}

export default CartList