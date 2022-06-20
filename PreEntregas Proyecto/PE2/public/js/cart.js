const socket = io.connect();

console.log("cart.js");

socket.on("cartsIds", handleCartsIds);

async function handleCartsIds(cartsIds) {
  const cartIdsOnServer = await fetch(
    "/views/partials/cartIdSection.handlebars"
  );

  const templateText = await cartIdsOnServer.text();

  const templateFunction = Handlebars.compile(templateText);

  const html = templateFunction({ cartsIds });
  document.getElementById("cartIdSection").innerHTML = html;

  const removeCartSection = await fetch(
    "/views/partials/removeCartSection.handlebars"
  );

  const templateText2 = await removeCartSection.text();

  const templateFunction2 = Handlebars.compile(templateText2);

  const html2 = templateFunction2({ cartsIds });

  document.getElementById("removeCartSection").innerHTML = html2;
}

socket.emit("getActiveCartId");

socket.on("activeCartId", handleGetActiveCartId);

async function handleGetActiveCartId(activeCartId) {
  setTimeout(() => {
    const aci = document.getElementById("activeCart");
    const aci2 = document.getElementById("activeCart2");

    aci.textContent = activeCartId;
    aci2.textContent = activeCartId;
  }, 1000);

  socket.emit("getCartProductsById", activeCartId);
}
socket.on("cartProductsById", handleCartProductsById);

async function handleCartProductsById(cartProductsById) {
  console.log("prods: " + { cartProductsById });

  const productsInCart = await fetch(
    "/views/partials/cartProductSection.handlebars"
  );

  const templateText = await productsInCart.text();
  const templateFunction = Handlebars.compile(templateText);

  const html = templateFunction({ cartProductsById });
  document.getElementById("cartProductSection").innerHTML = html;
}
function removeItemFromCart(productId) {
  socket.emit("removeItemFromCart", { cartId: cartId, productId: productId });
}

async function addItemToCart(productId) {
  socket.emit("addItemToCart", { cartId: cartId, productId: productId });
}

//esto deberia crearse por cada usuario
function createNewCart() {
  const cart = {
    products: [],
  };
  socket.emit("createCart", cart);
}
