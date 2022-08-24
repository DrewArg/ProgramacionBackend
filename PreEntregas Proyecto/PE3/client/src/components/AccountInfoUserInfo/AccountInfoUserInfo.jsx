import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaPencilAlt } from 'react-icons/fa'
import { BsCheckLg } from 'react-icons/bs'
import './AccountInfoUserInfo.css'
import { logPlugin } from '@babel/preset-env/lib/debug'


const AccountInfoUserInfo = ({ isEditable, handleConfirm, handleEdit }) => {
    const [username, setUsername] = useState('')
    const [fullName, setFullName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [age, setAge] = useState('')
    const [avatar, setAvatar] = useState('')
    const navigate = useNavigate()

    const [requested, setRequested] = useState(false)

    const updateAccountInfo = async () => {

        const url = 'http://localhost:8080/account/update-info'

        const user = {
            username: username,
            fullName: fullName,
            address: address,
            phone: phone,
            age: age,
            avatar: avatar
        }

        const body = JSON.stringify(user)

        await fetch(url, {
            method: 'POST',
            body: body,
            headers: {
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Origin': 'http://localhost:3000',
                'Access-Control-Allow-Methods': 'POST,GET',
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })

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
                    if (json.address) {
                        setAddress(json.address)
                    }
                    if (json.age) {
                        const gotAge = parseInt(json.age)
                        setAge(json.age)
                    }
                    if (json.avatar) {
                        setAvatar(json.avatar)
                    }
                    if (json.phone) {
                        setPhone(json.phone)
                    }
                    if (json.fullName) {
                        setFullName(json.fullName)
                    }

                } else {
                    navigate("/");
                }
            } else {
            }
        })

    }

    useEffect(() => {
        if (!requested) {
            getAccountInfo()
            setRequested(true)
        }

    }, [requested]);
    return (
        <>
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
                        <input type={'text'} defaultValue={username} placeholder={'usuario'} disabled />
                        <input type={'text'} defaultValue={fullName} placeholder={'nombre completo'} onChange={(e) => setFullName(e.target.value)} />
                        <input type={'text'} defaultValue={address} placeholder={'dirección'} onChange={(e) => setAddress(e.target.value)} />
                        <input type={'number'} defaultValue={age} placeholder={'edad'} onChange={(e) => setAge(e.target.value)} />
                        <input type={'text'} defaultValue={phone} placeholder={'teléfono'} onChange={(e) => setPhone(e.target.value)} />
                        <input type={'text'} defaultValue={avatar} placeholder={'avatar'} onChange={(e) => setAvatar(e.target.value)} />
                    </div>

                    :
                    <div className='accountInfo__userInfo--rightElements'>
                        <input type={'text'} defaultValue={username} disabled placeholder={'usuario'} />
                        <input type={'text'} defaultValue={fullName} disabled placeholder={'nombre completo'} />
                        <input type={'text'} defaultValue={address} disabled placeholder={'dirección'} />
                        <input type={'number'} defaultValue={age} disabled placeholder={'edad'} />
                        <input type={'text'} defaultValue={phone} disabled placeholder={'teléfono'} />
                        <input type={'text'} defaultValue={avatar} disabled placeholder={'avatar'} />
                    </div>
                }
            </form>

            <div className='accountInfo__edit'>
                {
                    isEditable ?
                        <div className='accountInfo__edit--checkmark'>
                            <BsCheckLg onClick={() => { handleConfirm(); updateAccountInfo() }} />
                        </div>
                        :

                        <div className='accountInfo__edit--pencil'>
                            <FaPencilAlt onClick={() => { handleEdit() }} />
                        </div>

                }
            </div>
        </>

    )
}

export default AccountInfoUserInfo