const socket = io.connect();

console.log("index.js");

socket.emit("getAllProducts");
socket.emit("getAllMessages");

const form = document.getElementById("productForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addProduct();
});

async function addProduct() {
  const title = document.getElementById("title").value;
  const price = document.getElementById("price").value;
  const thumbnail = document.getElementById("thumbnail").value;

  const product = {
    title: title,
    price: price,
    thumbnail: thumbnail,
  };

  socket.emit("saveProduct", product);
 
}

socket.on("products", handleProductsEvent);

async function handleProductsEvent(products) {
  const productsTable = await fetch("/views/partials/productTable.handlebars");

  const templateText = await productsTable.text();

  const templateFunction = Handlebars.compile(templateText);

  const html = templateFunction({ products });

  document.getElementById("productTable").innerHTML = html;

  form.reset();
}

async function addMessage() {
  const userEmail = document.getElementById("userEmail").value;

  const msgContent = document.getElementById("msgContent").value;

  const message = {
    userEmail: userEmail,
    msgContent: msgContent,
  };

  socket.emit("saveMessage", message);
}

let btnSendMessage;

socket.on("messages", handleAllMessages);

async function handleAllMessages(messages) {
  const chat = await fetch("/views/partials/chat.handlebars");

  const templateText = await chat.text();

  const templateFunction = Handlebars.compile(templateText);

  const html = templateFunction({ messages });

  document.getElementById("globalChat").innerHTML = html;

  btnSendMessage = document.getElementById("btn__sendMessage");
  btnSendMessage.addEventListener("click", addMessage);
}
