import React from 'react'
import { useState, useContext } from 'react'
import { SocketContext } from '../../context/Socket';


function ProductForm() {
    const reactSocket = useContext(SocketContext)
    const [newProduct, setNewProduct] = useState({})

    async function createProduct() {
        setNewProduct({

        })
    }

    return (
        <>
            <div className="contenedorForm">
                <h3 className="tituloSeccion">Ingresar Producto</h3>
                <form id="productForm">
                    <div className="contenedorInput">
                        <label className="formLabel">Ingrese el título</label>
                        <input className='formInput' type="text" placeholder="título" id="title" name="title" />
                    </div>

                    <div className="contenedorInput">
                        <label className="formLabel">Ingrese el precio</label>
                        <input className='formInput' type="number" placeholder="precio" id="price" name="price" />
                    </div>
                    <div className="contenedorInput">
                        <label className="formLabel">Ingrese la url de la imágen</label>
                        <input className='formInput' type="text" placeholder="url de imágen" id="thumbnail" name="thumbnail" />
                    </div>

                    <button className="btn__submit" onClick={() => { createProduct() }}>Add Product</button>

                </form>
            </div>
        </>
    )
}

export default ProductForm