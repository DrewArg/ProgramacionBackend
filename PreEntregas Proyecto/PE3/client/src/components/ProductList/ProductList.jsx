import React from 'react'
import ProductForm from '../ProductForm/ProductForm.jsx'
import ProductCard from '../ProductCard/ProductCard.jsx'
import { FaPencilAlt } from 'react-icons/fa'
import { BsCheckLg } from 'react-icons/bs'
import { useState, useEffect } from 'react'
import './ProductList.css'

const ProductList = ({ products }) => {
    const [admin, setAdmin] = useState(false)
    const [editProd, setEditProd] = useState(false)

    const [updatedProd, setUpdatedProd] = useState({})

    const updateProduct = async () => {

        const url = 'http://localhost:8080/api/products/update-product'


        const product = {
            // username: username,
            // fullName: fullName,
            // address: address,
            // phone: phone,
            // age: age,
        }

        const body = JSON.stringify(product)

        await fetch(url, {
            method: 'POST',
            body: body,
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

    const isAdmin = async () => {

        const url = 'http://localhost:8080/account/isAdmin'

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
                const response = JSON.parse(text)
                if (response) {
                    setAdmin(true)
                } else {
                    setAdmin(false)
                }
            }
        })

    }
    useEffect(() => {
        isAdmin()
    }, []);
    return (
        <>
            {
                admin ?
                    < ProductForm />
                    :
                    ""
            }
            <div id='productTable'>
                {
                    admin ?
                        <>
                            <div>
                                <h3>Editar Productos</h3>
                                <FaPencilAlt onClick={() => { setEditProd(true) }} />
                                {/* <BsCheckLg onClick={() => { updateProduct(); setEditProd(false) }} /> */}
                            </div>
                        </>
                        :
                        ""
                }
                {
                    products.length > 0 ?

                        editProd
                            ?
                            <table className='productTable'>
                                <tbody className='productTable__body'>
                                    {products.map(p => {
                                        return (
                                            <ProductCard editProd={editProd} key={p.id} product={p} />
                                        )
                                    })}
                                </tbody>
                            </table>
                            :
                            <table className='productTable'>
                                <tbody className='productTable__body'>
                                    {products.map(p => {
                                        return (
                                            <>
                                                <ProductCard key={p.id} product={p} />
                                            </>
                                        )
                                    })}
                                </tbody>
                            </table>
                        :
                        <h3>No hay productos en el sistema actualmente...</h3>
                }
            </div>
        </>
    )
}

export default ProductList