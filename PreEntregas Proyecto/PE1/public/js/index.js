const socket = io.connect();

console.log("index.js");

/** asigno los permisos de usuario */

const btnTipoUsuario = document.getElementById("btn__userType");
btnTipoUsuario.addEventListener("click", changeUser);

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
console.log(currentUser.textContent);

/** cargo los productos iniciales */
socket.emit("getAllProducts"); //server socket --> emit(products)

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
/** agrego un producto y cargo productos nuvevamente */
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

const btnAddProduct = document.getElementById("btn__addProduct");

btnAddProduct.addEventListener("click", () => {
  addProduct(currentUser.textContent);
});

async function addProduct(currentUser) {
  console.log("client user: " + currentUser);
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

  let headersList = {
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify(product);

  await fetch(`/api/products?currentUser=${currentUser}`, {
    method: "POST",
    body: bodyContent,
    headers: headersList,
    action: `/api/products?currentUser=${currentUser}`,
  }).catch((err) => console.log(err));

  form.reset();

  socket.emit("getAllProducts");
}

/** borro un producto y cargo productos nuvevamente */

const btnDeleteProduct = document.getElementById("btn__deleteProduct");

btnDeleteProduct.addEventListener("click", () => {
  deleteProduct(currentUser.textContent);
});

async function deleteProduct(currentUser) {
  console.log("client user: " + currentUser);
  const prodId = document.getElementById("idProduct").value;

  let headersList = {
    "Content-Type": "application/json",
  };

  await fetch(`/api/products/${prodId}?currentUser=${currentUser}`, {
    method: "DELETE",
    headers: headersList,
    action: `/api/products/${prodId}?currentUser=${currentUser}`,
  }).catch((err) => console.log(err));

  form.reset();

  socket.emit("getAllProducts");
}

/** actualizo un producto y cargo productos nuvevamente */

const btnUpdateProduct = document.getElementById("btn__updateProduct");

btnUpdateProduct.addEventListener("click", () => {
  updateProduct(currentUser.textContent);
});

async function updateProduct(currentUser) {
  console.log("client user: " + currentUser);
  const prodId = document.getElementById("idProduct").value;
  const name = document.getElementById("name").value;
  const description = document.getElementById("description").value;
  const code = document.getElementById("code").value;
  const thumbnail = document.getElementById("thumbnail").value;
  const price = document.getElementById("price").value;
  const stock = document.getElementById("stock").value;

  const product = {
    id: prodId,
    name: name,
    description: description,
    code: code,
    thumbnail: thumbnail,
    price: price,
    stock: stock,
  };

  let headersList = {
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify(product);

  await fetch(`/api/products/${prodId}?currentUser=${currentUser}`, {
    method: "PUT",
    body: bodyContent,
    headers: headersList,
    action: `/api/products/${prodId}?currentUser=${currentUser}`,
  }).catch((err) => console.log(err));

  form.reset();

  socket.emit("getAllProducts");
}

/** formulario de búsqueda de producto por ID */

const form2 = document.getElementById("form2");

form2.addEventListener("submit", (e) => {
  e.preventDefault();
});

/** busco el producto */

const btnProductID = document.getElementById("btn__searchProduct");
btnProductID.addEventListener("click", () => {
  searchProduct();
});

async function searchProduct() {
  const id = document.getElementById("prodId").value;

  socket.emit("searchProduct", id); //server socket --> emit(foundProduct)
  form2.reset();
}

socket.on("deletedProduct", () => {
  socket.emit("getAllProducts");
});

/** muesrto el producto buscado por ID */

socket.on("foundProduct", showProduct);

async function showProduct(foundProduct) {
  console.log("Acaaaaa")
  const productsTable = await fetch("/views/partials/searchProduct.handlebars");
  const templateText = await productsTable.text();

  console.log(templateText);
  console.log({foundProduct});

  const templateFunction = Handlebars.compile(templateText);

  const html = templateFunction({ foundProduct });
  document.getElementById("productById").innerHTML = html;
}

/** cargo los productos seleccionados al carrito */

async function addToCart(id) {
  console.log("add to cart");
  console.log("id: " +  id);
  
    let headersList = {
      "Content-Type": "application/json",
    };

    // let bodyContent = JSON.stringify(id);

    const currentProd = await fetch(`/api/products/${id}`, {
      method: "POST",
      headers: headersList,
      action: `/api/products/${id}`,
    }).catch((err) => console.log(err));

    const response = await currentProd.json();
      
  let bodyContent = JSON.stringify(id);

  await fetch(`/api/carts`, {
    method: "POST",
    body: bodyContent,
    headers: headersList,
    action: `/api/carts`,
  }).catch((err) => console.log(err));
}