const socket = io.connect();

console.log("cart.js");

socket.emit("getCartsIds");

socket.on("cartsIds", handleCartsIds);

async function handleCartsIds(cartsIds) {
  console.log("acaa");
  const cartIdsOnServer = await fetch(
    "/views/partials/cartIdSection.handlebars"
  );
  const templateText = await cartIdsOnServer.text();

  const templateFunction = Handlebars.compile(templateText);

  const html = templateFunction({ cartsIds });
  document.getElementById("cartIdSection").innerHTML = html;
}

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

socket.emit("getActiveCartId");

socket.on("activeCartId", handleGetActiveCartId);

async function handleGetActiveCartId(activeCartId) {
  setTimeout(() => {
    document.getElementById("activeCart").textContent = activeCartId;
  }, 1000);
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

    socket.emit("getCartsIds");
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

  socket.emit("getCartsIds");
}

async function saveCartId() {
  let headersList = {
    "Content-Type": "application/json",
  };

  const activeCartExist = document.getElementById("activeCart");
  const cartId = activeCartExist.textContent;

  await fetch(`/api/activeCartId/${cartId}`, {
    method: "POST",
    headers: headersList,
    action: `/api/activeCartId/${cartId}`,
  }).catch((err) => console.log(err));
}
