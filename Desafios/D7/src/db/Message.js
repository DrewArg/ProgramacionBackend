class Message {
  constructor(userEmail, date, msgContent) {
    if (!userEmail) throw new Error("falta agregar el mail del usuario");
    if (!date) throw new Error("falta agregar la fecha del mensaje");
    if (!msgContent) throw new Error("falta agregar el contenido del mensaje");
    this.userEmail = userEmail;
    this.date = date;
    this.msgContent = msgContent;
  }
}

export default Message ;
