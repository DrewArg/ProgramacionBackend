const socket = io.connect();

console.log("index.js");

socket.emit("getAllProducts");

const form2 = document.getElementById("form2");

form2.addEventListener("submit", (e) => {
  e.preventDefault();
  searchProduct();
});

async function searchProduct() {
  const prodId = document.getElementById("prodId").value;

  alert("hola");

  const prod = await fetch(`api/products/:${prodId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    action: `api/products/:${prodId}`,
  }).catch((err) => console.log(err));

  alert(prod);
  form2.reset();
}

const btnTipoUsuario = document.getElementById("btn__userType");
btnTipoUsuario.addEventListener("click", changeUser);

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addProduct();
});

function changeUser() {
  const div = document.getElementById("currentUser");
  const content = div.textContent;
  console.log(content);
  if (content === "Normal") {
    div.textContent = "Admin";
  } else {
    div.textContent = "Normal";
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
