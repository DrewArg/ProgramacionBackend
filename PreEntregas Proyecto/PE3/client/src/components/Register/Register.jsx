import React, { useState } from 'react'

const Register = () => {

    const [username, setUsername] = useState('')
    const [userPass, setUserPass] = useState('')
    const [name, setName] = useState('')

    const [errorRegister, setErrorRegister] = useState(false)

    const register = async () => {
        const url = 'http://localhost:8080/auth/register'
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
                setErrorRegister(false)
            } else {
                setErrorRegister(true)
            }
        })
    }
    return (
        <>
            {errorRegister ?

                <>
                    <h2>Ha ocurrido un error en tu registro, prueba de nuevo</h2>
                    <div className='login'>
                        <form>
                            <label className='formLabel'> Nombre de usuario
                                <input className='formInput' type="text" placeholder='nombre de usuario' id='username' name="username" value={username} onInput={e => setUsername(e.target.value)} />
                            </label>
                            <label className='formLabel'> Contraseña
                                <input className='formInput' type="password" placeholder='contraseña' id='password' name="password" value={userPass} onInput={e => setUserPass(e.target.value)} />
                            </label>
                            <button className='btn__submit' onClick={register}>Registrarse</button>
                        </form>
                    </div>

                </> :
                <>
                    <div className='login'>
                        <form>
                            <label className='formLabel'> Nombre de usuario
                                <input className='formInput' type="text" placeholder='nombre de usuario' id='username' name="username" value={username} onInput={e => setUsername(e.target.value)} />
                            </label>
                            <label className='formLabel'> Contraseña
                                <input className='formInput' type="password" placeholder='contraseña' id='password' name="password" value={userPass} onInput={e => setUserPass(e.target.value)} />
                            </label>
                            <button className='btn__submit' onClick={register}>Registrarse</button>
                        </form>
                    </div>
                </>
            }
        </>
    )
}

export default Register