import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import AddProductContainer from '../../container/AddProductContainer/AddProductContainer'
import EditProductContainer from '../../container/EditProductContainer/EditProductContainer'


const Admin = ({ setLoginPipActive, setRegisterPipActive }) => {

    const [admin, setAdmin] = useState(false)

    const isAdmin = async () => {

        const url = `${process.env.REACT_APP_SERVER_URL}/account/isAdmin`

        await fetch(url, {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Origin': `${process.env.REACT_APP_CLIENT_URL}`,
                'Access-Control-Allow-Methods': 'POST,GET',
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        }).then(async (r) => {
            if (r.status === 200) {
                const text = await r.text()
                const response = JSON.parse(text)
                if (response) {
                    setAdmin(true)
                } else {
                    setAdmin(false)
                }
            }
        })

    }
    useEffect(() => {
        isAdmin()
    }, []);
    return (
        <>
            {admin ?
                <>
                    <Navbar setLoginPipActive={setLoginPipActive} setRegisterPipActive={setRegisterPipActive} />
                    <AddProductContainer />
                    <EditProductContainer />
                </>
                :
                <>
                    <h2>Ups.. Parece que no tienes acceso a esta página. Regresa al menú principal</h2>
                    <Link to="/">
                        <button className='btn__submit'>Menú Principal</button>
                    </Link>
                </>
            }


        </>

    )
}

export default Admin