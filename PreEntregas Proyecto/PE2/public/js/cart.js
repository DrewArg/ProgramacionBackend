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

socket.emit("getCartProductsById");

socket.on("cartProductsById", handleCartProductsById);
async function handleCartProductsById(cartProductsById) {
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
