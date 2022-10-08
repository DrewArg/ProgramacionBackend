const socket = io.connect();

socket.emit("getAllMessages");

let btnSendMessage;

socket.on("messages", handleAllMessages);

async function handleAllMessages(messages) {
  const chat = await fetch("/views/partials/chat.handlebars");
  const templateText = await chat.text();
  const templateFunction = Handlebars.compile(templateText);
  const html = templateFunction({ messages });
  console.log(html);
  document.getElementById("globalChat").innerHTML = html;
}

btnSendMessage = document.getElementById("btn__sendMessage");
btnSendMessage.addEventListener("click", addMessage);

async function addMessage() {
  const userEmail = document.getElementById("userEmail").value;
  const msgContent = document.getElementById("msgContent").value;
  const timestamp = getTimestamp();

  const message = {
    author: userEmail,
    text: msgContent,
    timestamp: timestamp,
  };

  socket.emit("saveMessage", message);
}

function getTimestamp() {
  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const builtDate =
    day + "/" + month + "/" + year + " " + hour + ":" + minutes + ":" + seconds;
  return builtDate;
}
