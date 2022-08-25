import React from 'react'
import { useState, useEffect } from 'react'
import EditProduct from '../EditProduct/EditProduct.jsx'
import './EditProductList.css'

const EditProductList = ({ products }) => {


    return (
        <>

            <div id='productTable'>
                {
                    products.length > 0 ?
                        <div className='formContainer'>
                            <table className='editForm'>
                                <thead >
                                    <tr className='editForm__header'>
                                        <th id='pf_delete'></th>
                                        <th id='pf_title'>Nombre de producto</th>
                                        <th id='pf_descri'>Descripción</th>
                                        <th id='pf_stock'>Stock</th>
                                        <th id='pf_price'>Precio unitario</th>
                                        <th id='pf_img'>Imágen</th>
                                        <th id='pf_imgUrl'>Url</th>
                                        <th id='pf_imgDescr'>Descripción Img</th>
                                        <th id='pf_edit'></th>
                                    </tr>
                                </thead>
                                <tbody className='editForm__body'>

                                    {products.map(p => {
                                        return (
                                            <EditProduct key={p.id} product={p} />
                                        )
                                    })}


                                </tbody>
                            </table>
                        </div>
                        :
                        <h3>No hay productos en el sistema actualmente...</h3>
                }
            </div>
        </>
    )
}

export default EditProductList