const socket = io.connect();

console.log("index.js");

socket.emit("getAllProducts");
socket.emit("getAllMessages");
socket.emit("getTestProducts");

async function getTest() {
  const testProdsAmount = document.getElementById("testProductsQty").value;
  await socket.emit("getTestProducts", testProdsAmount);
}

socket.on("testProducts", handleTestProductsEvent);

async function handleTestProductsEvent(testProducts) {
  const testProductsTable = await fetch(
    "/views/partials/mockProductTable.handlebars"
  );

  const templateText = await testProductsTable.text();

  const templateFunction = Handlebars.compile(templateText);

  const html = templateFunction({ testProducts });

  document.getElementById("mockProductTable").innerHTML = html;
}

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
  const userName = document.getElementById("userName").value;
  const userLastName = document.getElementById("userLastName").value;
  const userAge = document.getElementById("userAge").value;
  const userAlias = document.getElementById("userAlias").value;
  const userAvatar = document.getElementById("userAvatar").value;
  const msgContent = document.getElementById("msgContent").value;
  const timestamp = getTimestamp();

  const message = {
    author: {
      userEmail: userEmail,
      userName: userName,
      userLastName: userLastName,
      userAge: userAge,
      userAlias: userAlias,
      userAvatar: userAvatar,
    },
    text: msgContent,
    timestamp: timestamp
  };

  socket.emit("saveMessage", message);
}

let btnSendMessage;

socket.on("messages", handleAllMessages);

async function handleAllMessages(messages) {
  console.log(messages);
  const chat = await fetch("/views/partials/chat.handlebars");

  const templateText = await chat.text();

  const templateFunction = Handlebars.compile(templateText);

  const html = templateFunction({ messages });

  document.getElementById("globalChat").innerHTML = html;

  btnSendMessage = document.getElementById("btn__sendMessage");
  btnSendMessage.addEventListener("click", addMessage);
}
async function getMockUserData() {
  socket.emit("getMockUserData");
}

socket.on("mockUserData", handleMockUserData);

async function handleMockUserData(mockUserData) {
  document.getElementById("userEmail").value = mockUserData.userEmail;
  document.getElementById("userName").value = mockUserData.userName;
  document.getElementById("userLastName").value = mockUserData.userLastName;
  document.getElementById("userAge").value = mockUserData.userAge;
  document.getElementById("userAlias").value = mockUserData.userAlias;
  document.getElementById("userAvatar").value = mockUserData.userAvatar;

}

function getTimestamp() {
  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const builtDate = day + "/" + month + "/" + year + " " + hour + ":" + minutes + ":" + seconds;
  return builtDate;
}