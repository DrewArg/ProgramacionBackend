import React from 'react'
import ProductForm from '../ProductForm/ProductForm.jsx'
import ProductCard from '../ProductCard/ProductCard.jsx'
import { useState, useEffect } from 'react'

const ProductList = ({ products }) => {
    //TODO solo mostrar el product form si es admin
    //TODO COMPLETAR ESTO QUE ESTÁ MAL

    const [username, setUsername] = useState('')

    const isAdmin = async () => {
        const url = 'http://localhost:8080/account/isAdmin'

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
        }).then(async (r) => {
            if (r.status === 200) {
                const text = await r.text()
                const json = JSON.parse(text)
                if (json !== " ") {
                    setUsername(json.username)
                } else {
                }
            } else {
            }
        })

    }
    useEffect(() => {
        let ignore = false;

        if (!ignore) {
            isAdmin()
            return () => { ignore = true }
        }

    }, [isAdmin]);
    return (
        <>
            <ProductForm />
            <div id='productTable'>
                {
                    products.length > 0 ?
                        <table className='productTable'>
                            <tbody>
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