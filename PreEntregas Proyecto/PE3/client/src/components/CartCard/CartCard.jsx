import React, { useState } from 'react'
import { useEffect } from 'react'
import './CartCard.css'

const CartCard = ({ product }) => {

    const [currAmount, setCurrAmount] = useState(0)

    const handleSubstract = async () => {

        if (parseInt(product.quantity) <= 0) {
            product.quantity = 0
            setCurrAmount(0)
        } else {
            product.quantity = parseInt(product.quantity) - 1
            setCurrAmount(parseInt(product.quantity))
        }

        updateProduct()
    }

    const updateProduct = async () => {
        const url = `http://localhost:8080/carts/products/:${product.id}/:${product.quantity}`

        await fetch(url, {
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
    }

    const handleAddition = () => {
        product.quantity = parseInt(product.quantity) + 1

        setCurrAmount(parseInt(product.quantity))
        updateProduct()
    }

    useEffect(() => {
        setCurrAmount(parseInt(product.quantity))
    })


    // const handleAddToCart = async () => {
    //     await isLogged()
    //     if (loggedIn) {
    //         const url = `http://localhost:8080/carts/products/:${product.id}/:${amount}`

    //         await fetch(url, {
    //             method: 'POST',
    //             headers: {
    //                 'Access-Control-Allow-Headers': 'Content-Type',
    //                 'Access-Control-Allow-Credentials': 'true',
    //                 'Access-Control-Allow-Origin': 'http://localhost:3000',
    //                 'Access-Control-Allow-Methods': 'POST,GET',
    //                 'Content-Type': 'application/json'
    //             },
    //             credentials: 'include'

    //         }).then(async (r) => {
    //             if (r.status === 200) {
    //             }
    //         })


    //     } else {
    //         console.log("not logged ");
    //     }
    // }


    return (
        <>
            {
                product ?
                    <>
                        <td headers="th1" id='cartCard__title'>{product.title}</td>
                        <td headers="th2" className='cartCard__cartSection' id='cartCard__units'>
                            <span id='qtySubstraction' onClick={() => { handleSubstract() }}>-</span>
                            <span id='qtyAmount'>{currAmount}</span>
                            <span id='qtyAddition' onClick={() => { handleAddition() }}>+</span>
                        </td>
                        <td headers="th3" id='cartCard__unitPrice'> ${product.price} </td>
                    </>
                    :
                    <h2>Cargando...</h2>


            }

        </>
    )
}

export default CartCard