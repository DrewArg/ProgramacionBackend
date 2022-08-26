import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductDetail from '../../components/ProductDetail/ProductDetail'
import './ProductDetailContainer.css'

const ProductDetailContainer = () => {
    const params = useParams()
    const productId = params.productId
    const [prod, setProd] = useState()

    const getProductById = async () => {

        const url = `http://localhost:8080/api/products/:${productId}`

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
                const p = JSON.parse(text)
                if (p) {
                    setProd(p)
                } else {
                }
            }
        })

    }
    useEffect(() => {
        getProductById()
    }, []);
    return (
        <>
            <div className='productDetailContainer'>
                <ProductDetail product={prod} />
            </div>
        </>
    )
}

export default ProductDetailContainer