import React, { useState } from 'react'
import { ImCross } from 'react-icons/im'
import './Register.css'


const Register = ({ setRegisterPipActive }) => {

    const [username, setUsername] = useState('')
    const [userPass, setUserPass] = useState('')

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
                console.log(text);
                setErrorRegister(false)
                setRegisterPipActive(false)
            } else {
                setErrorRegister(true)
            }
        })
    }
    return (
        <>
            {errorRegister ?

                <>
                    <div className='registerForm'>
                        <ImCross className='registerForm__exit' onClick={() => { setRegisterPipActive(false) }} />
                        <h2>Ha ocurrido un error en tu registro, prueba de nuevo</h2>
                        <form className='registerForm__form' >
                            <label className='formLabel'> Nombre de usuario
                            </label>
                            <input className='formInput' type="email" placeholder='nombre de usuario' id='username' name="username" value={username} onInput={e => setUsername(e.target.value)} />
                            <label className='formLabel'> Contraseña
                            </label>
                            <input className='formInput' type="password" placeholder='contraseña' id='password' name="password" value={userPass} onInput={e => setUserPass(e.target.value)} />
                        </form>
                        <button className='btn__submit' onClick={register}>Registrarse</button>
                    </div>
                    <div className='pipBackground'></div>


                </> :
                <>
                    <div className='registerForm'>
                        <ImCross className='registerForm__exit' onClick={() => { setRegisterPipActive(false) }} />
                        <form className='registerForm__form'>
                            <label className='formLabel'> Nombre de usuario
                            </label>
                            <input className='formInput' type="email" placeholder='nombre de usuario' id='username' name="username" value={username} onInput={e => setUsername(e.target.value)} />
                            <label className='formLabel'> Contraseña
                            </label>
                            <input className='formInput' type="password" placeholder='contraseña' id='password' name="password" value={userPass} onInput={e => setUserPass(e.target.value)} />
                        </form>
                        <button className='btn__submit' onClick={register}>Registrarse</button>
                    </div>
                    <div className='pipBackground'></div>

                </>
            }
        </>
    )
}

export default Register