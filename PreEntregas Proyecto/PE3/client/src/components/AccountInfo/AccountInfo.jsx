import React from 'react'
import AccountInfoMenu from '../AccountInfoMenu/AccountInfoMenu'
import AccountInfoUserInfo from '../AccountInfoUserInfo/AccountInfoUserInfo'
import { useState } from 'react'

import { FaPencilAlt } from 'react-icons/fa'
import { BsCheckLg } from 'react-icons/bs'
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
                <AccountInfoUserInfo isEditable={isEditable} />
                <div className='accountInfo__edit'>
                    {
                        isEditable ?
                            <div className='accountInfo__edit--checkmark'>
                                <BsCheckLg onClick={() => { handleConfirm() }} />
                            </div>
                            :

                            <div className='accountInfo__edit--pencil'>
                                <FaPencilAlt onClick={() => { handleEdit() }} />
                            </div>

                    }
                </div>

            </div>

        </>
    )
}

export default AccountInfo