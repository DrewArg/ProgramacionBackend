import React, { useState } from 'react'

const Login = () => {

    const [username, setUsername] = useState('')
    const [userPass, setUserPass] = useState('')
    const [name, setName] = useState('')

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
                const user = JSON.parse(text)
                setName(user.username)
                setErrorLogin(false)
            } else {
                setErrorLogin(true)
            }
        })
    }

    const logout = async () => {
        const url = 'http://localhost:8080/auth/logout'
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
                setName('')
            }
            setErrorLogin(false)
        })
    }

    return (
        <>
            {errorLogin ?

                <>
                    <h2>Ha ocurrido un error en tu ingreso, prueba de nuevo</h2>
                    <div className='login'>
                        <form>
                            <label className='formLabel'> Nombre de usuario
                                <input className='formInput' type="text" placeholder='nombre de usuario' id='username' name="username" value={username} onInput={e => setUsername(e.target.value)} />
                            </label>
                            <label className='formLabel'> Contraseña
                                <input className='formInput' type="password" placeholder='contraseña' id='password' name="password" value={userPass} onInput={e => setUserPass(e.target.value)} />
                            </label>
                            <button className='btn__submit' onClick={login}>Ingresar</button>
                        </form>
                    </div>
                </>

                :
                <>
                    <div className='login'>
                        <form>
                            <label className='formLabel'> Nombre de usuario
                                <input className='formInput' type="text" placeholder='nombre de usuario' id='username' name="username" value={username} onInput={e => setUsername(e.target.value)} />
                            </label>
                            <label className='formLabel'> Contraseña
                                <input className='formInput' type="password" placeholder='contraseña' id='password' name="password" value={userPass} onInput={e => setUserPass(e.target.value)} />
                            </label>
                            <button className='btn__submit' onClick={login}>Ingresar</button>
                        </form>
                    </div>
                </>
            }
        </>
    )
}

export default Login
