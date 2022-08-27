import React, { useContext } from 'react'
import { useState } from 'react'
import { SocketContext } from '../../context/Socket.jsx'
import './ProductForm.css'

const ProductForm = () => {
    const reactSocket = useContext(SocketContext)

    const [prodTitle, setProdTitle] = useState("")
    const [prodDescr, setProdDescr] = useState("")
    const [prodStock, setProdStock] = useState(0.0)
    const [prodPrice, setProdPrice] = useState(0.0)
    const [prodThumbnail, setProdThumbnail] = useState("")
    const [prodAlt, setProdAlt] = useState("")

    const addProduct = async () => {
        const product = {
            title: prodTitle,
            description: prodDescr,
            stock: prodStock,
            price: prodPrice,
            thumbnail: prodThumbnail,
            alt: prodAlt
        }

        await reactSocket.emit("saveProduct", product)

        setProdTitle("")
        setProdPrice(0)
        setProdDescr("")
        setProdStock(0)
        setProdThumbnail("")
        setProdAlt("")
    }

    const emptyList = () => {
        setProdTitle("")
        setProdPrice(0)
        setProdDescr("")
        setProdStock(0)
        setProdThumbnail("")
        setProdAlt("")
    }


    return (
        <>
            <div className='formContainer'>
                <table className='productForm'>
                    <thead >
                        <tr className='productForm__header'>
                            <th id='pf_title'>Nombre de producto</th>
                            <th id='pf_descri'>Descripción</th>
                            <th id='pf_stock'>Stock</th>
                            <th id='pf_price'>Precio unitario</th>
                            <th id='pf_img'>Imágen</th>
                            <th id='pf_imgDescr'>Descripción Img</th>
                        </tr>
                    </thead>
                    <tbody className='productForm__body'>
                        <tr className='productFormCard'>
                            <td headers='pf_title'><input className='formInput' type="text" placeholder='nombre del producto' id='prodTitle' name="prodTitle" value={prodTitle} onInput={e => setProdTitle(e.target.value)} />
                            </td>
                            <td headers='pf_descri'><input className='formInput' type="text" placeholder='descripción del producto' id='prodDescr' name="prodDescr" value={prodDescr} onInput={e => setProdDescr(e.target.value)} /></td>
                            <td headers='pf_stock'><input className='formInput' type="number" placeholder='precio' id='prodStock' name="prodStock" value={prodStock} onInput={e => setProdStock(e.target.value)} /></td>
                            <td headers='pf_price'><input className='formInput' type="number" placeholder='precio' id='prodPrice' name="prodPrice" value={prodPrice} onInput={e => setProdPrice(e.target.value)} /></td>
                            <td headers='pf_img'><input className='formInput' type="text" placeholder='url de imágen' id='prodThumbnail' name="prodPrice" value={prodThumbnail} onInput={e => setProdThumbnail(e.target.value)} /></td>
                            <td headers='pf_descri'><input className='formInput' type="text" placeholder='descripción de la imágen' id='prodAlt' name="prodAlt" value={prodAlt} onInput={e => setProdAlt(e.target.value)} /></td>
                        </tr>

                    </tbody>
                </table>
            </div>
            <div className='btns__div'>
                <button className='btn__submit' onClick={addProduct}>Agregar Producto</button>
                <button className='btn__submit' onClick={emptyList}>Limpiar formulario</button>
            </div>



        </>
    )
}

export default ProductForm