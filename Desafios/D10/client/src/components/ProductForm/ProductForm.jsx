import React from 'react'
import { useState, useContext } from 'react'
import { SocketContext } from '../../context/Socket';


function ProductForm() {
    const reactSocket = useContext(SocketContext)
    
    const [prodTitle, setProdTitle] = useState("")
    const [prodPrice, setProdPrice] = useState(0)
    const [prodThumbnail, setProdThumbnail] = useState("")

    const addProduct = async () => {

        const product = {
            title: prodTitle,
            price: prodPrice,
            thumbnail: prodThumbnail
        }

        await reactSocket.emit("saveProduct", product)

        setProdTitle("")
        setProdPrice(0)
        setProdThumbnail("")
    }

    return (
        <>
            <div className="contenedorForm">
                <h3 className="tituloSeccion">Ingresar Producto</h3>
                <div id="productForm">
                    <div className="contenedorInput">
                        <label className="formLabel">Ingrese el título</label>
                        <input className='formInput' type="text" placeholder="título" id="title" name="title" value={prodTitle} onInput={e => setProdTitle(e.target.value)} />
                    </div>

                    <div className="contenedorInput">
                        <label className="formLabel">Ingrese el precio</label>
                        <input className='formInput' type="number" placeholder="precio" id="price" name="price" value={prodPrice} onInput={e => setProdPrice(e.target.value)} />
                    </div>
                    <div className="contenedorInput">
                        <label className="formLabel">Ingrese la url de la imágen</label>
                        <input className='formInput' type="text" placeholder="url de imágen" id="thumbnail" name="thumbnail" value={prodThumbnail} onInput={e => setProdThumbnail(e.target.value)} />
                    </div>

                    <button className="btn__submit" onClick={addProduct}>Add Product</button>

                </div>
            </div>
        </>
    )
}

export default ProductForm

/**
 * import { useId, useState } from 'react';

function myFunctionalComponentFunction() {
  const id = useId();
  const [input, setInput] = useState(''); // '' is the initial state value
  return (
    <div>
    <label htmlFor={id}>Please specify:</label>
    <input id={id} value={input} onInput={e => setInput(e.target.value)}/>
    </div>
  );
}
 */