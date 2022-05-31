const socket = io.connect();

console.log("index.js");

socket.emit('getAllProducts');
socket.emit('getAllMessages');

const form = document.getElementById('productForm');

form.addEventListener('submit', e => {
  e.preventDefault();
  addProduct();
})

async function addProduct() {

  const title = document.getElementById("title").value;
  const price = document.getElementById("price").value;
  const thumbnail = document.getElementById("thumbnail").value;

  const product = {
    "title": title,
    "price": price,
    "thumbnail": thumbnail
  }


  await fetch("/api/products", {
    method: "POST",
    body: JSON.stringify(product),
    headers: {
      "Content-Type": "application/json"
    },
    action: "api/products"
  })
    .catch((err) => console.log(err));


  form.reset();

  socket.emit('getAllProducts');

}

socket.on('products', handleProductsEvent);

async function handleProductsEvent(products) {
  const productsTable = await fetch('/views/partials/productTable.handlebars')

  const templateText = await productsTable.text();

  const templateFunction = Handlebars.compile(templateText)

  const html = templateFunction({ products })

  document.getElementById('productTable').innerHTML = html
}



async function addMessage() {

  const userEmail = document.getElementById('userEmail').value;

  const msgContent = document.getElementById('msgContent').value;

  const message = {
    "userEmail": userEmail,
    "msgContent": msgContent
  }

  await fetch("api/messages", {
    method: 'POST',
    body: JSON.stringify(message),
    headers: {
      "Content-Type": "application/json"
    },
    action: "api/messages"
  })
    .catch((err) => console.log(err))

  socket.emit('getAllMessages')

}

socket.on('messages', handleAllMessages)

async function handleAllMessages(messages) {
  const chat = await fetch('/views/partials/chat.handlebars')

  const templateText = await chat.text();

  const templateFunction = Handlebars.compile(templateText)

  const html = templateFunction({ messages })

  document.getElementById('globalChat').innerHTML = html


}


window.onload = () => {
  setTimeout(loadAfterTime, 50)
}

function loadAfterTime() {
  const btnSendMessage = document.getElementById('btn__sendMessage')
  btnSendMessage.addEventListener('click', addMessage)

}