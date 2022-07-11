import React, { useState, useEffect } from 'react'
import './Login.css'

function Login() {

    const [userName, setUserName] = useState('')
    const [name, setName] = useState('')


    const login = async () => {
        const url = 'http://localhost:8080/api/login'
        const user = {
            name: userName
        }

        await fetch(url, {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Origin': 'http://localhost:3000',
                'Access-Control-Allow-Methods': 'POST,GET',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
        }).then(async (r) => {
            if (r.status === 200) {
                const text = await r.text()
                setName(text)
            }
        })
    }


    const logout = async () => {
        const url = 'http://localhost:8080/api/logout'

        await fetch(url, {
            method: "POST",
            headers: {
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Origin': 'http://localhost:3000',
                'Access-Control-Allow-Methods': 'POST,GET',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
        }).then(async (r) => {
            if (r.status === 200) {
                setName('')

            }
        })

    }

    useEffect(() => {
        const url = 'http://localhost:8080/'

        function getFetch() {
            fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
            }).then(async (r) => {
                if (r.status === 200) {
                    const text = await r.text()
                    setName(text)
                }
            })
        }
        getFetch()
    })

    return (
        <>
            <h1>Desafío N° 10</h1>


            {name !== '' ?
                <>
                    <h2>Bienvenide {name}</h2>
                    <button className="btn__submit" onClick={logout}>Salir</button>
                </>
                :
                <>
                    <div className='login'>
                        <label className="formLabel">Ingresa tu nombre</label>
                        <input className='formInput' type="text" placeholder="nombre" id="nombreUsuario" name="nombreUsuario" value={userName} onInput={e => { setUserName(e.target.value) }} />
                        <button className="btn__submit" onClick={login}>Ingresar</button>
                    </div>
                </>
            }

        </>
    )
}

export default Login