import React, { useState } from 'react'
import { ImCross } from 'react-icons/im'
import './Login.css'

const Login = ({ setLoginPipActive }) => {

    const [username, setUsername] = useState('')
    const [userPass, setUserPass] = useState('')

    const [errorLogin, setErrorLogin] = useState(false)

    const login = async () => {
        const url = 'http://localhost:8080/auth/login'
        const user = {
            username: username,
            password: userPass
        }


        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(user),
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
                console.log(text);
                setErrorLogin(false)
            } else {
                setErrorLogin(true)
            }
        })
    }


    return (
        <>
            {errorLogin ?

                <>
                    <div className='loginForm'>
                        <ImCross className='loginForm__exit' onClick={() => { setLoginPipActive(false) }} />
                        <h2>Ha ocurrido un error en tu ingreso, prueba de nuevo</h2>
                        <form className='loginForm__form'>
                            <label className='formLabel'> Nombre de usuario
                            </label>
                            <input className='formInput' type="text" placeholder='nombre de usuario' id='username' name="username" value={username} onInput={e => setUsername(e.target.value)} />
                            <label className='formLabel'> Contraseña
                            </label>
                            <input className='formInput' type="password" placeholder='contraseña' id='password' name="password" value={userPass} onInput={e => setUserPass(e.target.value)} />
                        </form>
                        <button className='btn__submit' onClick={login}>Ingresar</button>
                    </div>
                    <div className='pipBackground'></div>
                </>

                :
                <>
                    <div className='loginForm'>
                        <ImCross className='loginForm__exit' onClick={() => { setLoginPipActive(false) }} />
                        <form className='loginForm__form'>
                            <label className='formLabel'> Nombre de usuario
                            </label>
                            <input className='formInput' type="text" placeholder='nombre de usuario' id='username' name="username" value={username} onInput={e => setUsername(e.target.value)} />
                            <label className='formLabel'> Contraseña
                            </label>
                            <input className='formInput' type="password" placeholder='contraseña' id='password' name="password" value={userPass} onInput={e => setUserPass(e.target.value)} />
                        </form>
                        <button className='btn__submit' onClick={login}>Ingresar</button>
                    </div>
                    <div className='pipBackground'></div>

                </>
            }
        </>
    )
}

export default Login
