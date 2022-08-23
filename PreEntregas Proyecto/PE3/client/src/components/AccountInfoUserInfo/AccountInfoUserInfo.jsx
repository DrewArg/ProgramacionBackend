import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './AccountInfoUserInfo.css'


const AccountInfoUserInfo = ({ isEditable }) => {
    const [username, setUsername] = useState('')
    const navigate = useNavigate()

    const handleTextEdit = (e) => {

    }

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
                if (json !== " ") {
                    setUsername(json.username)
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

    }, [getAccountInfo]);
    return (
        <form className='accountInfo__userInfo'>
            <div className='accountInfo__userInfo--leftElements'>
                <label>Usuario</label>
                <label>Nombre Completo</label>
                <label>Dirección</label>
                <label>Edad</label>
                <label>N° de teléfono</label>
                <label>Avatar</label>
            </div>
            {isEditable ?
                <div className='accountInfo__userInfo--rightElements'>
                    <input type={'text'} value={username} placeholder={'usuario'} onChange={(e) => setUsername(e.target.value)} />
                    <input type={'text'} value={''} placeholder={'nombre completo'} />
                    <input type={'text'} value={''} placeholder={'dirección'} />
                    <input type={'number'} value={''} placeholder={'edad'} />
                    <input type={'number'} value={''} placeholder={'teléfono'} />
                    <input type={'text'} value={''} placeholder={'avatar'} />
                </div>

                :
                <div className='accountInfo__userInfo--rightElements'>
                    <input type={'text'} value={username} disabled placeholder={'usuario'} onChange={(e) => setUsername(e.target.value)} />
                    <input type={'text'} value={''} disabled placeholder={'nombre completo'} />
                    <input type={'text'} value={''} disabled placeholder={'dirección'} />
                    <input type={'number'} value={''} disabled placeholder={'edad'} />
                    <input type={'number'} value={''} disabled placeholder={'teléfono'} />
                    <input type={'text'} value={''} disabled placeholder={'avatar'} />
                </div>
            }
        </form>

    )
}

export default AccountInfoUserInfo