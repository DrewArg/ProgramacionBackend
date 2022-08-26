import React from 'react'
import AccountInfoMenu from '../AccountInfoMenu/AccountInfoMenu'
import AccountInfoUserInfo from '../AccountInfoUserInfo/AccountInfoUserInfo'
import { useEffect } from 'react'

import { useState } from 'react'

import './AccountInfo.css'

const AccountInfo = () => {
    const [isEditable, setIsEditable] = useState(false)
    const [username, setUsername] = useState('')
    const [avatar, setAvatar] = useState('')

    const [requested, setRequested] = useState(false)

    const [loading, setLoading] = useState(true)

    const handleConfirm = () => {
        setIsEditable(false)
    }

    const handleEdit = () => {
        setIsEditable(true)


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

                    if (json.profileImg) {
                        setAvatar(json.profileImg.profileImgPath)
                        setLoading(false)
                    }

                }
            }
        })

    }

    useEffect(() => {
        if (!requested) {
            getAccountInfo()
            setRequested(true)
        }
        if (username !== "") {
            setLoading(false)
        }

    }, [requested, username]);
    return (
        <>
            <div className='accountInfo__userData'>
                {loading ?
                    <>
                        <h2>Cargando...</h2></>
                    :
                    <>
                        <img src={avatar} width={75} height={75} />
                        <h2>¡Hola {username}!</h2>

                    </>
                }
            </div>
            <div className='accountInfo'>
                <AccountInfoMenu />
                <AccountInfoUserInfo isEditable={isEditable} handleConfirm={handleConfirm} handleEdit={handleEdit} />
            </div>

        </>
    )
}

export default AccountInfo