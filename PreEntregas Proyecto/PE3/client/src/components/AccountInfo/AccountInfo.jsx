import React from 'react'
import AccountInfoMenu from '../AccountInfoMenu/AccountInfoMenu'
import AccountInfoUserInfo from '../AccountInfoUserInfo/AccountInfoUserInfo'
import { FaPencilAlt } from 'react-icons/fa'
import './AccountInfo.css'

const AccountInfo = () => {
    return (
        <>
            <div className='accountInfo'>
                <AccountInfoMenu />
                <AccountInfoUserInfo />
                <div className='accountInfo_Edit'>
                    <FaPencilAlt /> Editar datos
                </div>

            </div>

        </>
    )
}

export default AccountInfo