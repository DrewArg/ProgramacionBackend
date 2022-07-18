import React, { useState, useEffect } from 'react'
import './Login.css'

function Login() {

    const [userName, setUserName] = useState('')
    const [userPass, setUserPass] = useState('')
    const [name, setName] = useState('')

    const register = async () => {
        const url = 'http://localhost:8080/auth/register'
        const user = {
            username: userName,
            password: userPass
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


    const login = async () => {
        const url = 'http://localhost:8080/auth/login'
        const user = {
            username: userName,
            password: userPass
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
        const url = 'http://localhost:8080/auth/logout'

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
            <h1>Desafío N° 11</h1>


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

                        <label className="formLabel">Ingresa tu cotraseña</label>
                        <input className='formInput' type="password" placeholder="contrasena" id="contrasena" name="contrasena" value={userPass} onInput={e => { setUserPass(e.target.value) }} />

                        <button className="btn__submit" onClick={login}>Ingresar</button>
                        <button className="btn__submit" onClick={register}>Reistrarse</button>
                    </div>
                </>
            }

        </>
    )
}

export default Login