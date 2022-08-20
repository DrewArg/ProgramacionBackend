import nodemailer from 'nodemailer'

//TODO Extraer todos estos datos al .env
const TEST_MAIL = 'tiffany12@ethereal.email'

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'tiffany12@ethereal.email',
        pass: 'vnUSxz4JAwJvGDS325'
    }
});

const mailOptions = {
    from: 'Servidor Node.js',
    to: TEST_MAIL,
    subject: 'Mail de prueba desde Node.js',
    html: '<h1 style="color: blue;">Contenido de prueba desde <span style="color: green;">Node.js con Nodemailer</span></h1>'
}

export const sendEtherealEmail = () => {
    try {
        const info = await transporter.sendMail(mailOptions)
        console.log(info)
    } catch (error) {
        console.error(`nodeMailer --> ${error}`);
    }
}
