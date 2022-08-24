import React from 'react'
import AccountInfoMenu from '../AccountInfoMenu/AccountInfoMenu'
import AccountInfoUserInfo from '../AccountInfoUserInfo/AccountInfoUserInfo'
import { useState } from 'react'

import './AccountInfo.css'

const AccountInfo = () => {
    const [isEditable, setIsEditable] = useState(false)

    const handleConfirm = () => {
        setIsEditable(false)
    }

    const handleEdit = () => {
        setIsEditable(true)
    }
    return (
        <>
            <div className='accountInfo'>
                <AccountInfoMenu />
                <AccountInfoUserInfo isEditable={isEditable} handleConfirm={handleConfirm} handleEdit={handleEdit} />
            </div>

        </>
    )
}

export default AccountInfo