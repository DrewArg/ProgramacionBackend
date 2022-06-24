const socket = io.connect();

console.log("index.js");

let cartId = null;

socket.emit("cartExist");
socket.on("cartExistResponse", hanldeCartExistResponse);

async function hanldeCartExistResponse(cartExistResponse) {
  if (cartExistResponse) {
    cartId = cartExistResponse;
  } else {
    socket.emit("createCart");
  }
  console.log(cartId);
}

socket.on("cartCreated", handleCartCreated);
async function handleCartCreated(cartCreated) {
  cartId = cartCreated;
  socket.emit("saveCartId", cartId);
  socket.emit("cartExist");
}

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

/** cargo los productos iniciales */
socket.emit("getAllProducts");

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

  const saveProd = {
    product: product,
    currentUser: currentUser,
  };

  socket.emit("saveProduct", saveProd);
  socket.emit("getAllProducts");
  form.reset();
}

/** borro un producto y cargo productos nuvevamente */

const btnDeleteProduct = document.getElementById("btn__deleteProduct");

btnDeleteProduct.addEventListener("click", () => {
  deleteProduct(currentUser.textContent);
});

async function deleteProduct(currentUser) {
  const prodId = document.getElementById("idProduct").value;

  const delProd = {
    prodId: prodId,
    currentUser: currentUser,
  };

  socket.emit("deleteProductById", delProd);
  socket.emit("getAllProducts");
  form.reset();
}

/** actualizo un producto y cargo productos nuvevamente */

const btnUpdateProduct = document.getElementById("btn__updateProduct");

btnUpdateProduct.addEventListener("click", () => {
  updateProduct(currentUser.textContent);
});

async function updateProduct(currentUser) {
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

  const updateProd = {
    product: product,
    currentUser: currentUser,
  };

  socket.emit("updateProduct", updateProd);

  socket.emit("getAllProducts");

  form.reset();
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
/** muesrto el producto buscado por ID */

socket.on("foundProduct", showProduct);

async function showProduct(foundProduct) {
  const productsTable = await fetch("/views/partials/searchProduct.handlebars");
  const templateText = await productsTable.text();

  const templateFunction = Handlebars.compile(templateText);

  const html = templateFunction({ foundProduct });
  document.getElementById("productById").innerHTML = html;
}

/** cargo los productos seleccionados al carrito */

async function addToCart(productId) {
  const settings = {
    productId: productId,
    cartId: cartId,
  };

  socket.emit("addToCart", settings);
}

socket.on("activeCartId", handleGetActiveCartId);

async function handleGetActiveCartId(activeCartId) {}

socket.on("unauthorized", () => {
  console.error("401: tipo de usuario no autorizado.");
});
