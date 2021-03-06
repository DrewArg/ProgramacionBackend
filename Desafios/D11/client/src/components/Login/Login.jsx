import React, { useState, useEffect } from 'react'
import './Login.css'

function Login() {

    const [userName, setUserName] = useState('')
    const [userPass, setUserPass] = useState('')
    const [name, setName] = useState('')
    const [errorLogin, setErrorLogin] = useState(false)
    const [errorRegistro, setErrorRegistro] = useState(false)

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
                const user = JSON.parse(text)
                setName(user.username)
                setErrorRegistro(false)
                setErrorLogin(false)

            } else {
                setErrorRegistro(true)
                setErrorLogin(false)

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
                setErrorLogin(false)
                setErrorRegistro(false)
                const text = await r.text()
                const response = JSON.parse(text)
                setName(response.username)
            } else {
                setErrorRegistro(false)
                setErrorLogin(true)
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

    // useEffect(() => {
    //     const url = 'http://localhost:8080/auth/'

    //     function getFetch() {
    //         fetch(url, {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //         }).then(async (r) => {
    //             if (r.status === 200) {
    //                 const text = await r.text()
    //                 setName(text)
    //             }
    //         })
    //     }
    //     getFetch()
    // })


    return (
        <>
            <h1>Desaf??o N?? 11</h1>


            {errorLogin ?

                <>
                    <h2>Ha ocurrido un error en tu login, prueba de nuevo</h2>
                    <div className='login'>
                        <label className="formLabel">Ingresa tu nombre</label>
                        <input className='formInput' type="text" placeholder="nombre" id="nombreUsuario" name="nombreUsuario" value={userName} onInput={e => { setUserName(e.target.value) }} />

                        <label className="formLabel">Ingresa tu cotrase??a</label>
                        <input className='formInput' type="password" placeholder="contrasena" id="contrasena" name="contrasena" value={userPass} onInput={e => { setUserPass(e.target.value) }} />

                        <button className="btn__submit" onClick={login}>Ingresar</button>
                        <button className="btn__submit" onClick={register}>Registrarse</button>
                    </div>
                </>
                :
                errorRegistro ?

                    <>
                        <h2>Ha ocurrido un error en tu registro, prueba de nuevo</h2>
                        <div className='login'>
                            <label className="formLabel">Ingresa tu nombre</label>
                            <input className='formInput' type="text" placeholder="nombre" id="nombreUsuario" name="nombreUsuario" value={userName} onInput={e => { setUserName(e.target.value) }} />

                            <label className="formLabel">Ingresa tu cotrase??a</label>
                            <input className='formInput' type="password" placeholder="contrasena" id="contrasena" name="contrasena" value={userPass} onInput={e => { setUserPass(e.target.value) }} />

                            <button className="btn__submit" onClick={login}>Ingresar</button>
                            <button className="btn__submit" onClick={register}>Registrarse</button>
                        </div>
                    </>

                    :

                    (name !== '' ?
                        <>
                            <h2>Bienvenide {name}</h2>
                            <button className="btn__submit" onClick={logout}>Salir</button>
                        </>
                        :
                        <>
                            <div className='login'>
                                <label className="formLabel">Ingresa tu nombre</label>
                                <input className='formInput' type="text" placeholder="nombre" id="nombreUsuario" name="nombreUsuario" value={userName} onInput={e => { setUserName(e.target.value) }} />

                                <label className="formLabel">Ingresa tu cotrase??a</label>
                                <input className='formInput' type="password" placeholder="contrasena" id="contrasena" name="contrasena" value={userPass} onInput={e => { setUserPass(e.target.value) }} />

                                <button className="btn__submit" onClick={login}>Ingresar</button>
                                <button className="btn__submit" onClick={register}>Registrarse</button>
                            </div>
                        </>
                    )}

        </>
    )
}

export default Login