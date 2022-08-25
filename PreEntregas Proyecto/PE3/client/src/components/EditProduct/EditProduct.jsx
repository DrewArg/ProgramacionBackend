import React from 'react'
import { FaPencilAlt, FaTrash } from 'react-icons/fa'
import { BsCheckLg } from 'react-icons/bs'
import './EditProduct.css'
import { useState } from 'react'

const EditProduct = ({ product }) => {
    const [edit, setEdit] = useState(false)

    const [prodTitle, setProdTitle] = useState("")
    const [prodDescr, setProdDescr] = useState("")
    const [prodStock, setProdStock] = useState(0.0)
    const [prodPrice, setProdPrice] = useState(0.0)
    const [prodThumbnail, setProdThumbnail] = useState("")
    const [prodAlt, setProdAlt] = useState("")

    const [updatedProd, setUpdatedProd] = useState({})

    const updateProduct = async (id) => {

        const url = 'http://localhost:8080/api/products/update/prod'


        const product = {
            title: prodTitle,
            description: prodDescr,
            stock: prodStock,
            price: prodPrice,
            thumbnail: prodThumbnail,
            alt: prodAlt,
            id: id
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
    return (
        <>
            <tr className='editProductCard'>

                {
                    edit ?
                        <>
                            <td headers='pf_delete' className='pf__delete'><FaTrash /></td>
                            <td headers='pf_title'> <input className='formInput' type="text" value={prodTitle} placeholder={product.title} id='prodTitle' name="prodTitle" onInput={e => setProdTitle(e.target.value)} /></td>
                            <td headers='pf_descri'><input className='formInput' type="text" value={prodDescr} placeholder={product.description} id='prodDescr' name="prodDescr" onInput={e => setProdDescr(e.target.value)} /></td>
                            <td headers='pf_stock'><input className='formInput' type="number" value={prodStock} placeholder={product.stock} id='prodStock' name="prodStock" onInput={e => setProdStock(e.target.value)} /></td>
                            <td headers='pf_price'><input className='formInput' type="number" value={prodPrice} placeholder={product.price} id='prodPrice' name="prodPrice" onInput={e => setProdPrice(e.target.value)} /></td>
                            <td headers='pf_img'><img src={product.thumbnail} width={50} height={50} /></td>
                            <td className='pf_imgUrl' headers='pf_imgUrl'><input className='formInput' type="text" value={product.thumbnail} placeholder={prodThumbnail} id='prodThumbnail' name="prodPrice" onInput={e => setProdThumbnail(e.target.value)} /></td>
                            <td headers='pf_imgDescr'><input className='formInput' type="text" value={product.alt} placeholder={prodAlt} id='prodAlt' name="prodAlt" onInput={e => setProdAlt(e.target.value)} /></td>
                            <td headers='pf_edit' className='pf__update' onClick={() => { updateProduct(product.id); setEdit(false) }} ><BsCheckLg /></td>
                        </>
                        :
                        <>
                            <td headers='pf_delete' className='pf__delete'><FaTrash /></td>
                            <td headers='pf_title'>{product.title}</td>
                            <td headers='pf_descri'>{product.description}</td>
                            <td headers='pf_stock'>{product.stock}</td>
                            <td headers='pf_price'>{product.price}</td>
                            <td headers='pf_img'><img src={product.thumbnail} width={50} height={50} /></td>
                            <td className='pf_imgUrl' headers='pf_imgUrl'>{product.thumbnail}</td>
                            <td headers='pf_imgDescr'>{product.alt}</td>
                            <td headers='pf_edit' className='pf__edit'><FaPencilAlt onClick={() => { setEdit(true) }} /></td>
                        </>
                }
            </tr>
        </>
    )
}

export default EditProduct