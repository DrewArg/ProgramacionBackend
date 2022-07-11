import React, { useState, useEffect, useContext } from 'react'
import { SocketContext } from '../../context/Socket'
import './Login.css'

function Login() {

    const [userName, setUserName] = useState('')
    const [name, setName] = useState('')
    const [id, setId] = useState('')
    const reactSocket = useContext(SocketContext)

    const login = () => {
        const user = {
            name: userName
        }
        reactSocket.emit("loginUser", user)
    }


    const logout = () => {
        const user = {
            name: name,
            id: id
        }

        reactSocket.emit("logoutUser", user)
    }



    useEffect(() => {
        reactSocket.on("loggedUser", (session) => {
            setName(session.name)
            setId(session.id)
        })

        reactSocket.on("logout", () => {
            setName('')
            setId('')
        })

    })

    return (
        <>
            <h1>Desafío N° 10</h1>
            <div className='login'>
                <label className="formLabel">Ingresa tu nombre</label>
                <input className='formInput' type="text" placeholder="nombre" id="nombreUsuario" name="nombreUsuario" value={userName} onInput={e => { setUserName(e.target.value) }} />
                <button className="btn__submit" onClick={login}>Ingresar</button>
            </div>

            {name !== '' ?
                <>
                    <h2>BIENVENIDO {name}</h2>
                    <button className="btn__submit" onClick={logout}>Salir</button>
                </>
                :
                <>
                </>
            }

        </>
    )
}

export default Login