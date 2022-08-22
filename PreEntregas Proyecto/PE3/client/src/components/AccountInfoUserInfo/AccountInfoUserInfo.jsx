import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const AccountInfoUserInfo = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const getAccountInfo = async () => {
        const url = 'http://localhost:8080/account/info'

        await fetch(url, {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Origin': 'http://localhost:3000',
                'Access-Control-Allow-Methods': 'POST,GET',
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        }).then(async (r) => {
            if (r.status === 200) {
                const text = await r.text()
                const json = JSON.parse(text)
                if (json != " ") {
                    setUsername(json.username)
                    setPassword(json.password)
                } else {

                    navigate("/");
                }
            } else {
            }
        })

    }
    useEffect(() => {
        let ignore = false;

        if (!ignore) {
            getAccountInfo()
            return () => { ignore = true }
        }

    }, []);
    return (
        <div className='accountInfo__userInfo'>
            <table>
                <tbody>
                    <tr>
                        <td>Usuario</td>
                        <td>{username}</td>
                    </tr>
                    <tr>
                        <td>Contraseña</td>
                        <td>{password}</td>
                    </tr>
                    <tr>
                        <td>Nombre completo</td>
                        <td>userFullName</td>
                    </tr>
                    <tr>
                        <td>Dirección</td>
                        <td>userAddress</td>
                    </tr>
                    <tr>
                        <td>Edad</td>
                        <td>userAge</td>
                    </tr>
                    <tr>
                        <td>N° de teléfono</td>
                        <td>userPhoneNumber</td>
                    </tr>
                    <tr>
                        <td>Avatar</td>
                        <td>userAvatar</td>
                    </tr>
                </tbody>

            </table>
        </div>
    )
}

export default AccountInfoUserInfo