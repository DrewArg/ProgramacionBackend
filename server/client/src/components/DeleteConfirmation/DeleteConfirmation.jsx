import React from 'react'
import { ImCross } from 'react-icons/im'
import '../Login/Login.css'

const DeleteConfirmation = ({ id, deleteProduct, setDeleteConfirmationActive }) => {
    return (
        <>
            <>
                <div className='loginForm'>
                    <ImCross className='loginForm__exit' onClick={() => { setDeleteConfirmationActive(false) }} />
                    <h2>Estás a punto de eliminar un producto</h2>
                    <h3>¿Estás seguro de continuar?</h3>
                    <button className='btn__submit' onClick={() => { deleteProduct(id); setDeleteConfirmationActive(false) }}>Continuar</button>
                    <button className='btn__submit' onClick={() => { setDeleteConfirmationActive(false) }}>Cancelar</button>
                </div>
                <div className='pipBackground'></div>
            </>
        </>

    )
}

export default DeleteConfirmation