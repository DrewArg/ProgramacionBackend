import { createTransport } from 'nodemailer';
import { adminAccount,adminEthereal,adminEtherealPass } from '../../config/config.js'

const transporter = createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: adminEthereal,
        pass: adminEtherealPass
    },
    // logger: true,
    // debug: true,
});

export const sendBuyEtherealEmail = async (buyer, products) => {
    try {
        const mailOptions = {
            from: adminAccount,
            to: adminAccount,
            subject: `Nuevo pedido de ${buyer.fullName} - ${buyer.username}`,
            html: `<p>Se han comprado los siguientes productos: </p>
            <ul>
           ${products.map((p) => {
                return (
                    `<li>${p.title}: ${p.quantity} unidades</li>`
                )
            })}
            </ul > `
        }
        await transporter.sendMail(mailOptions)
    } catch (error) {
        console.error(`nodeMailer-- > ${error} `);
    }
}

export const sendNewRegisterEthereal = async (user) => {
    try {
        const mailOptions = {
            from: adminAccount,
            to: adminAccount,
            subject: `Nuevo registro`,
            html: `<p>Se ha registrado un nuevo usuario: </p>
            <ul>
            <li>username: ${user.username}</li>
            <li>full name: ${user.fullName}</li>
            <li>phone: ${user.phoneNumber}</li>
            </ul>`

        }
        await transporter.sendMail(mailOptions)
    } catch (error) {
        console.error(`nodeMailer-- > ${error} `);
    }
}


