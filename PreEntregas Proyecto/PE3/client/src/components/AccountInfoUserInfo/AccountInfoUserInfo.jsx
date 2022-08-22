import React from 'react'


const AccountInfoUserInfo = () => {
    return (
        <div className='accountInfo__userInfo'>
            <table>
                <tbody>
                    <tr>
                        <td>Usuario</td>
                        <td>username</td>
                    </tr>
                    <tr>
                        <td>Contraseña</td>
                        <td>userPassword</td>
                    </tr>
                    <tr>
                        <td>Nombre completo</td>
                        <td>userFullName</td>
                    </tr>
                    <tr>
                        <td>Dirección</td>
                        <td>userAddress</td>
                    </tr>
                    <tr>
                        <td>Edad</td>
                        <td>userAge</td>
                    </tr>
                    <tr>
                        <td>N° de teléfono</td>
                        <td>userPhoneNumber</td>
                    </tr>
                    <tr>
                        <td>Avatar</td>
                        <td>userAvatar</td>
                    </tr>
                </tbody>

            </table>
        </div>
    )
}

export default AccountInfoUserInfo