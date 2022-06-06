const socket = io.connect();

console.log("index.js");

socket.emit("getAllProducts");

const form2 = document.getElementById("form2");

form2.addEventListener("submit", (e) => {
  e.preventDefault();
  searchProduct();
});

async function searchProduct() {
  const id = document.getElementById("prodId").value;

  await fetch("/api/products/:id", {
    method: "POST",
    body: JSON.stringify(id),
    headers: {
      "Content-Type": "application/json",
    },
    action: "api/products/:id",
  }).catch((err) => console.log(err));

  form2.reset()

  socket.emit("searchProduct")
}

socket.on("foundProduct", showProduct);

async function showProduct(foundProduct) {
  const productsTable = await fetch("/views/partials/searchProduct.handlebars");
  const templateText = await productsTable.text();

  const templateFunction = Handlebars.compile(templateText);

  const html = templateFunction({ foundProduct });
  document.getElementById("productById").innerHTML = html;
}

const btnTipoUsuario = document.getElementById("btn__userType");
btnTipoUsuario.addEventListener("click", changeUser);

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

const btnAddProduct = document.getElementById("btn__addProduct");
btnAddProduct.addEventListener('click', addProduct)

const btnProductID = document.getElementById("btn__productID");
btnProductID.addEventListener('click', searchProduct)

const currentUser = document.getElementById("currentUser");
if (currentUser == undefined) {
  currentUser.textContent = "Normal";
}

function changeUser() {
  const content = currentUser.textContent;
  if (content === "Normal") {
    currentUser.textContent = "Admin";
  } else {
    currentUser.textContent = "Normal";
  }
}

async function addProduct() {
  const name = document.getElementById("name").value;
  const description = document.getElementById("description").value;
  const code = document.getElementById("code").value;
  const thumbnail = document.getElementById("thumbnail").value;
  const price = document.getElementById("price").value;
  const stock = document.getElementById("stock").value;

  const product = {
    name: name,
    description: description,
    code: code,
    thumbnail: thumbnail,
    price: price,
    stock: stock,
  };

  await fetch("/api/products", {
    method: "POST",
    body: JSON.stringify(product),
    headers: {
      "Content-Type": "application/json",
    },
    action: "api/products",
  }).catch((err) => console.log(err));

  form.reset();

  socket.emit("getAllProducts");
}

socket.on("products", handleProductsEvent);

async function handleProductsEvent(products) {
  const productsTable = await fetch(
    "/views/partials/productSection.handlebars"
  );
  const templateText = await productsTable.text();

  const templateFunction = Handlebars.compile(templateText);

  const html = templateFunction({ products });
  document.getElementById("cartProductSection").innerHTML = html;
}


async function searchProduct() {
  const prodId = document.getElementById("searchById").value;
  alert(prodId)

  const formData = {
    productId: prodId,
    auth: "admin"
  }

  await fetch(`/api/products/${prodId}` = {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json",
    },
    action: `/api/products/${prodId}`,
  }).catch((err) => console.log(err));

  form.reset();

  socket.emit("searchProduct")
}

socket.on("foundProduct", handleFoundProduct);

async function handleFoundProduct(foundProduct) {
  const productsTable = await fetch(
    "/views/partials/seachProduct.handlebars"
  );
  const templateText = await productsTable.text();

  const templateFunction = Handlebars.compile(templateText);

  const html = templateFunction({ foundProduct });
  document.getElementById("productById").innerHTML = html;
}

