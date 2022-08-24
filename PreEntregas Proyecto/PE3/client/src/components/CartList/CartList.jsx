import React from 'react'
import CartCard from '../CartCard/CartCard.jsx'
import './CartList.css'

const CartList = ({ products }) => {

    return (
        <>
            {console.log(products)}
            <div id='cartTable'>
                {
                    products.length > 0 ?
                        <table className='cartTable'>
                            <tbody className='cartTable__body'>
                                {products.map(p => { return <CartCard key={p.id} product={p} /> })}
                            </tbody>
                        </table>
                        :
                        <h3>No hay productos en el carrito actualmente... Revisa si estás ingresado</h3>
                }
            </div>
        </>
    )
}

export default CartList