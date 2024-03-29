const socket = io.connect();

const url = "https://afternoon-eyrie-75480.herokuapp.com";
// const url = "http://localhost:8080";

async function handleInfo(info) {
  console.log(info);
  const infoTemplate = await fetch("/views/partials/info.handlebars");
  const templateText = await infoTemplate.text();
  const templateFunction = Handlebars.compile(templateText);
  const html = templateFunction( info );
  document.getElementById("serverInfo").innerHTML = html;
}

function addMessage() {
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

socket.emit("getAllMessages");

socket.on("messages", handleAllMessages);

async function handleAllMessages(messages) {
  const chat = await fetch("/views/partials/chat.handlebars");
  const templateText = await chat.text();
  const templateFunction = Handlebars.compile(templateText);
  const html = templateFunction({ messages });
  document.getElementById("globalChat").innerHTML = html;

  const info = await fetch(`${url}/info`, {
    method: "GET",
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error:", error);
    });

  await handleInfo(info);
}

function addMessage() {
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

const fileInput = document.getElementById("image_uploads");
const btnFileUpload = document.getElementById("btn__fileUpload");
btnFileUpload.addEventListener("click", addFile);

async function addFile(e) {
  e.preventDefault();
  const formData = new FormData();
  formData.append("newImage", fileInput.files[0]);

  fetch(`${url}/api/images`, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.error("Error:", error);
    });
}
