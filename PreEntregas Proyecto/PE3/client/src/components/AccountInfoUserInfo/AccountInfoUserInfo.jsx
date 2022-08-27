import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaPencilAlt } from 'react-icons/fa'
import { BsCheckLg } from 'react-icons/bs'
import axios from 'axios'
import './AccountInfoUserInfo.css'

const AccountInfoUserInfo = ({ isEditable, handleConfirm, handleEdit }) => {
    const [username, setUsername] = useState('')
    const [fullName, setFullName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [age, setAge] = useState('')
    const navigate = useNavigate()


    // const [requested, setRequested] = useState(false)

    const [avatar, setAvatar] = useState({ profileImg: '' })

    const updateAccountInfo = async () => {

        const url = `${process.env.REACT_APP_SERVER_URL}/account/update-info`


        const user = {
            username: username,
            fullName: fullName,
            address: address,
            phone: phone,
            age: age,
        }

        const body = JSON.stringify(user)

        await fetch(url, {
            method: 'POST',
            body: body,
            headers: {
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Origin': `${process.env.REACT_APP_CLIENT_URL}`,
                'Access-Control-Allow-Methods': 'POST,GET',
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })

    }

    const getAccountInfo = async () => {
        const url = `${process.env.REACT_APP_SERVER_URL}/account/info`

        await fetch(url, {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Origin': `${process.env.REACT_APP_CLIENT_URL}`,
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
                        setAge(json.age)
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


    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateAccountInfo()
    }

    const addFile = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('profileImg', avatar.profileImg)
        formData.append('username', username)
        axios.post(`${process.env.REACT_APP_SERVER_URL}/account/update-profileImg`, formData, {
        }).then(res => {
        })
    }

    const onFileChange = (e) => {
        setAvatar({ profileImg: e.target.files[0] })
    }

    useEffect(() => {
        getAccountInfo()

    });
    return (
        <>

            {isEditable ?
                <>
                    <div className='accountInfo__userInfo'>

                        <form className='accountInfo__userInfo' onSubmit={handleSubmit} encType="multipart/form-data" method="POST">
                            <div className='accountInfo__userInfo--leftElements'>
                                <label>Usuario</label>
                                <label>Nombre Completo</label>
                                <label>Dirección</label>
                                <label>Edad</label>
                                <label>N° de teléfono</label>
                            </div>
                            <div className='accountInfo__userInfo--rightElements'>
                                <input type={'text'} defaultValue={username} placeholder={'usuario'} disabled />
                                <input type={'text'} defaultValue={fullName} placeholder={'nombre completo'} onChange={(e) => setFullName(e.target.value)} />
                                <input type={'text'} defaultValue={address} placeholder={'dirección'} onChange={(e) => setAddress(e.target.value)} />
                                <input type={'number'} defaultValue={age} placeholder={'edad'} onChange={(e) => setAge(e.target.value)} />
                                <input type={'text'} defaultValue={phone} placeholder={'teléfono'} onChange={(e) => setPhone(e.target.value)} />
                            </div>
                        </form>
                        <form onSubmit={addFile}>
                            <input type="file" onChange={onFileChange} />
                            <button className="btn__submit" type="submit">Upload</button>
                        </form>
                        <div className='accountInfo__edit'>
                            <div className='accountInfo__edit--checkmark'>
                                <BsCheckLg type='submit' onClick={() => { updateAccountInfo(); handleConfirm() }} />
                            </div>
                        </div>
                    </div>

                </>

                :
                <>
                    <div className='accountInfo__userInfo'>
                        <form className='accountInfo__userInfo' onSubmit={handleSubmit} encType="multipart/form-data" method="POST">
                            <div className='accountInfo__userInfo--leftElements'>
                                <label>Usuario</label>
                                <label>Nombre Completo</label>
                                <label>Dirección</label>
                                <label>Edad</label>
                                <label>N° de teléfono</label>
                            </div>
                            <div className='accountInfo__userInfo--rightElements'>
                                <input type={'text'} defaultValue={username} disabled placeholder={'usuario'} />
                                <input type={'text'} defaultValue={fullName} disabled placeholder={'nombre completo'} />
                                <input type={'text'} defaultValue={address} disabled placeholder={'dirección'} />
                                <input type={'number'} defaultValue={age} disabled placeholder={'edad'} />
                                <input type={'text'} defaultValue={phone} disabled placeholder={'teléfono'} />
                            </div>
                        </form>
                        <form onSubmit={addFile}>
                            <input type="file" onChange={onFileChange} disabled />
                            <button className="btn__submit" type="submit">Upload</button>
                        </form>
                        <div className='accountInfo__edit'>
                            <div className='accountInfo__edit--pencil'>
                                <FaPencilAlt onClick={() => { handleEdit() }} />
                            </div>
                        </div>
                    </div>
                </>

            }



        </>

    )
}

export default AccountInfoUserInfo