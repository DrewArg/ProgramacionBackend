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
  let headersList = {
    "Content-Type": "application/json",
  };

  const currentProd = await fetch(`/api/products/${productId}`, {
    method: "POST",
    headers: headersList,
    action: `/api/products/${productId}`,
  }).catch((err) => console.log(err));

  const productResponse = await currentProd.json();

  const activeCartExist = document.getElementById("activeCart");
  const cartId = activeCartExist.textContent;
  let bodyContent = JSON.stringify(productResponse);

  if (cartId !== "activeCartExist") {
    await fetch(`/api/carts/${cartId}/products`, {
      method: "POST",
      body: bodyContent,
      headers: headersList,
      action: `/api/carts/${cartId}/products`,
    }).catch((err) => console.log(err));
  } else {
    const newCartId = await fetch(`/api/carts`, {
      method: "POST",
      body: bodyContent,
      headers: headersList,
      action: `/api/carts`,
    }).catch((err) => console.log(err));

    cartId.textContent = newCartId;

    //socket.emit("getCartsIds");
  }
}

function changeCartId() {
  const userCartId = document.getElementById("userCartId");

  const activeCart = document.getElementById("activeCart");

  activeCart.textContent = userCartId.value;
  userCartId.value = "";
}

async function createNewCart() {
  let headersList = {
    "Content-Type": "application/json",
  };

  const activeCartExist = document.getElementById("activeCart");
  const cartId = activeCartExist.textContent;
  let bodyContent = "";
  const newCartId = await fetch(`/api/carts`, {
    method: "POST",
    body: bodyContent,
    headers: headersList,
    action: `/api/carts`,
  }).catch((err) => console.log(err));

  cartId.textContent = newCartId;

  //socket.emit("getCartsIds");
}

// async function saveCartId() {
//   let headersList = {
//     "Content-Type": "application/json",
//   };

//   const activeCartExist = document.getElementById("activeCart");
//   const cartId = activeCartExist.textContent;

//   await fetch(`/api/activeCartId/${cartId}`, {
//     method: "POST",
//     headers: headersList,
//     action: `/api/activeCartId/${cartId}`,
//   }).catch((err) => console.log(err));
// }

//socket.emit("getActiveCartId");

socket.on("activeCartId", handleGetActiveCartId);

async function handleGetActiveCartId(activeCartId) {
  setTimeout(() => {
    document.getElementById("activeCart").textContent = activeCartId;
  }, 1000);
}

socket.on("unauthorized", () => {
  console.error("401: tipo de usuario no autorizado.");
});
