import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './AccountInfoUserInfo.css'


const AccountInfoUserInfo = ({ isEditable }) => {
    const [username, setUsername] = useState('')
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
        <form className='accountInfo__userInfo'>
            {isEditable ?
                <>
                    <div>
                        <label>Usuario</label>
                        <input type={'text'} value={username} placeholder={'usuario'} />
                    </div>
                    <div>
                        <label>Nombre Completo</label>
                        <input type={'text'} value={''} placeholder={'nombre completo'} />
                    </div>
                    <div>
                        <label>Dirección</label>
                        <input type={'text'} value={''} placeholder={'dirección'} />
                    </div>
                    <div>
                        <label>Edad</label>
                        <input type={'number'} value={''} placeholder={'edad'} />
                    </div>
                    <div>
                        <label>N° de teléfono</label>
                        <input type={'number'} value={''} placeholder={'teléfono'} />
                    </div>
                    <div>
                        <label>Avatar</label>
                        <input type={'text'} value={''} placeholder={'avatar'} />
                    </div>
                </>

                :
                <>
                    <div>
                        <label>Usuario</label>
                        <input type={'text'} value={username} placeholder={'usuario'} disabled />
                    </div>
                    <div>
                        <label>Nombre Completo</label>
                        <input type={'text'} value={''} placeholder={'nombre completo'} disabled />
                    </div>
                    <div>
                        <label>Dirección</label>
                        <input type={'text'} value={''} placeholder={'dirección'} disabled />
                    </div>
                    <div>
                        <label>Edad</label>
                        <input type={'number'} value={''} placeholder={'edad'} disabled />
                    </div>
                    <div>
                        <label>N° de teléfono</label>
                        <input type={'number'} value={''} placeholder={'teléfono'} disabled />
                    </div>
                    <div>
                        <label>Avatar</label>
                        <input type={'text'} value={''} placeholder={'avatar'} disabled />
                    </div>
                </>
            }
        </form>

    )
}

export default AccountInfoUserInfo