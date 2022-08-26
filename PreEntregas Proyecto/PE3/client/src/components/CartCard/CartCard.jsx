import React, { useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import { useEffect } from 'react'
import './CartCard.css'

const CartCard = ({ product }) => {

    const [currAmount, setCurrAmount] = useState(1)
    const [totalUnit, setTotalUnit] = useState(0)

    const deleteProduct = async (id) => {

        const url = 'http://localhost:8080/carts/products/delete'

        const prodId = {
            productId: id
        }

        const body = JSON.stringify(prodId)

        await fetch(url, {
            method: 'DELETE',
            body: body,
            headers: {
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Origin': 'http://localhost:3000',
                'Access-Control-Allow-Methods': 'POST,GET,DELETE',
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })

    }
    const handleSubstract = async () => {

        if (currAmount <= 1) {
            product.quantity = 1
            setCurrAmount(1)
        } else {
            product.quantity = parseInt(product.quantity) - 1
            setCurrAmount(parseInt(product.quantity))
        }
        setTotalUnit(currAmount * parseInt(product.price))

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
        setTotalUnit(currAmount * parseInt(product.price))

        updateProduct()
    }

    useEffect(() => {
        // let curQty
        // console.log("prqu: " + product.quantity);
        // if (product.quantity === 0) {
        //     curQty = 0
        // } else {
        //     curQty = parseInt(product.quantity)
        // }

        setCurrAmount(product.quantity)
        setTotalUnit(product.quantity * product.price)

    },[product.quantity,product.price])

    return (
        <>
            {
                product ?
                    <>
                        <td headers='th_0' className='pf__delete'><FaTrash onClick={() => { deleteProduct(product.id) }} /></td>
                        <td headers="th1" id='cartCard__title'>{product.title}</td>
                        <td headers="th2" className='cartCard__cartSection' id='cartCard__units'>
                            <span id='qtySubstraction' onClick={() => { handleSubstract() }}>-</span>
                            <span id='qtyAmount'>{currAmount}</span>
                            <span id='qtyAddition' onClick={() => { handleAddition() }}>+</span>
                        </td>
                        <td headers="th3" id='cartCard__unitPrice'> ${product.price} </td>
                        <td headers="th4" id='cartCard__totalUnit'>${totalUnit}</td>
                    </>
                    :
                    <h2>Cargando...</h2>


            }

        </>
    )
}

export default CartCard