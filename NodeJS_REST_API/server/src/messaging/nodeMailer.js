import { createTransport } from "nodemailer";
import { adminEthereal, adminEtherealPass } from "../config/config.js";
import { winston } from "../controllers/loggersControllers.js";

const transporter = createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: adminEthereal,
    pass: adminEtherealPass,
  },
});

export const sendBuyEtherealEmailToAdmin = async (buyer, orders, orderId) => {
  try {
    const mailOptions = {
      from: adminEthereal,
      to: adminEthereal,
      subject: `Nuevo pedido de ${buyer.name} - ${buyer.email}`,
      html: `
      <p>Orden de compra: ${orderId}</p>
      <p>Se han comprado los siguientes productos: </p>
            <ul>
           ${orders.map((o) => {
             return `<li>${o.productId}: ${o.quantity} unidades</li>`;
           })}
            </ul > `,
    };
    await transporter.sendMail(mailOptions);
  } catch (error) {
    winston.log("error", `nodeMailer -->  ${error}`);
  }
};
export const sendBuyEtherealEmailToBuyer = async (buyer, orders, orderId) => {
  try {
    const mailOptions = {
      from: adminEthereal,
      to: buyer.email,
      subject: `Nuevo pedido ${buyer.name}`,
      html: `
      <p>Tu ID de orden de compra es ${orderId}
      <p>Se han comprado los siguientes productos: </p>
      <ul>
      ${orders.map((o) => {
        return `<li>${o.productId}: ${o.quantity} unidades</li>`;
      })}
       </ul > `,
    };
    await transporter.sendMail(mailOptions);
  } catch (error) {
    winston.log("error", `nodeMailer -->  ${error}`);
  }
};

export const sendNewRegisterEtherealToAdmin = async (user) => {
  try {
    const mailOptions = {
      from: adminEthereal,
      to: adminEthereal,
      subject: `Nuevo registro`,
      html: `<p>Se ha registrado un nuevo usuario ${user.email} </p>
            <ul>
            <li>username: ${user.email}</li>
            <li>full name: ${user.name} ${user.lastname}</li>
            <li>phone: ${user.phoneNumber}</li>
            <li>image: <img src="${process.env.SERVER}/${user.image}" style="max-width:20%"></li>
            </ul>`,
    };
    await transporter.sendMail(mailOptions);
  } catch (error) {
    winston.log("error", `nodeMailer -->  ${error}`);
  }
};
export const sendNewRegisterEtherealToUser = async (user) => {
  try {
    const mailOptions = {
      from: adminEthereal,
      to: user.email,
      subject: `Bienvenid@ ${user.email}`,
      html: `<p>Te has registrado! </p>
            <p>Estos son los datos de tu registro </p>
            <ul>
            <li>username: ${user.email}</li>
            <li>full name: ${user.name} ${user.lastname}</li>
            <li>phone: ${user.phoneNumber}</li>
            <li>image: <img src="${process.env.SERVER}/${user.image}" style="max-width:20%"></li>
            </ul>`,
    };
    await transporter.sendMail(mailOptions);
  } catch (error) {
    winston.log("error", `nodeMailer -->  ${error}`);
  }
};
