import React from 'react'
import { useState } from 'react'

const ProductForm = () => {
    const [prodTitle, setProdTitle] = useState("")
    const [prodPrice, setProdPrice] = useState(0.0)
    const [prodThumbnail, setProdThumbnail] = useState("")
    const [prodAlt, setProdAlt] = useState("")

    const addProduct = async () =>{
        const product ={
            title: prodTitle,
            price: prodPrice,
            thumbnail: prodThumbnail,
            alt: prodAlt
        }
    }

    return (
        <>

        </>
    )
}

export default ProductForm