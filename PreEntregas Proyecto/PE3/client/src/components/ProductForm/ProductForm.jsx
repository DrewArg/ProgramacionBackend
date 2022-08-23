import React, { useContext } from 'react'
import { useState } from 'react'
import { SocketContext } from '../../context/Socket.jsx'
import './ProductForm.css'

const ProductForm = () => {
    const reactSocket = useContext(SocketContext)

    const [prodTitle, setProdTitle] = useState("")
    const [prodPrice, setProdPrice] = useState(0.0)
    const [prodThumbnail, setProdThumbnail] = useState("")
    const [prodAlt, setProdAlt] = useState("")

    const addProduct = async () => {
        const product = {
            title: prodTitle,
            price: prodPrice,
            thumbnail: prodThumbnail,
            alt: prodAlt
        }

        await reactSocket.emit("saveProduct", product)

        setProdTitle("")
        setProdPrice(0.0)
        setProdThumbnail("")
        setProdAlt("")
    }

    const emptyList = () => {
        setProdTitle("")
        setProdPrice(0.0)
        setProdThumbnail("")
        setProdAlt("")
    }


    return (
        <>
            <div className='formContainer'>
                <h3 className='sectionTitle'>Ingresar Producto</h3>
                <form className='productForm'>
                    <div className='productForm__element'>
                        <label className='formLabel'> Título </label>
                        <input className='formInput' type="text" placeholder='título del producto' id='prodTitle' name="prodTitle" value={prodTitle} onInput={e => setProdTitle(e.target.value)} />
                    </div>

                    <div className='productForm__element'>
                        <label className='formLabel'> Precio </label>
                        <input className='formInput' type="number" placeholder='precio' id='prodPrice' name="prodPrice" value={prodPrice} onInput={e => setProdPrice(e.target.value)} />
                    </div>

                    <div className='productForm__element'>
                        <label className='formLabel'> Imágen </label>
                        <input className='formInput' type="text" placeholder='url de imágen' id='prodThumbnail' name="prodPrice" value={prodThumbnail} onInput={e => setProdThumbnail(e.target.value)} />
                    </div>

                    <div className='productForm__element'>
                        <label className='formLabel'> Descripción </label>
                        <input className='formInput' type="text" placeholder='descripción de la imágen' id='prodAlt' name="prodAlt" value={prodAlt} onInput={e => setProdAlt(e.target.value)} />
                    </div>
                    <div className='btns__div'>
                        <button className='btn__submit' onClick={addProduct}>Agregar Producto</button>
                        <button className='btn__submit' onClick={emptyList}>Limpiar formulario</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ProductForm