import React from 'react'
import ProductForm from '../ProductForm/ProductForm.jsx'
import ProductCard from '../ProductCard/ProductCard.jsx'
import { useState, useEffect } from 'react'
import './ProductList.css'

const ProductList = ({ products }) => {
    //TODO solo mostrar el product form si es admin
    //TODO COMPLETAR ESTO QUE ESTÁ MAL

    const [admin, setAdmin] = useState(false)

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
                    products.length > 0 ?
                        <table className='productTable'>
                            <tbody className='productTable__body'>
                                {products.map(p => { return <ProductCard key={p.id} product={p} /> })}
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