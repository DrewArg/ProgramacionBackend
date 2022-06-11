const socket = io.connect();

console.log("cart.js");

socket.emit("getCartsIds");

socket.on("cartsIds", handleCartsIds);

async function handleCartsIds(cartsIds) {
  try {
    const cartIdsOnServer = await fetch(
      "/views/partials/cartIdSection.handlebars"
    );

    try {
      const templateText = await cartIdsOnServer.text();

      const templateFunction = Handlebars.compile(templateText);

      const html = templateFunction({ cartsIds });
      document.getElementById("cartIdSection").innerHTML = html;
    } catch (error) {
      return {
        error: `no se pudo convertir el template a texto. Error:  ${error}`,
      };
    }
  } catch (error) {
    return {
      error: `no se pudo recuperar el cartIdSection.handlebars. Error:  ${error}`,
    };
  }

  try {
    const removeCartSection = await fetch(
      "/views/partials/removeCartSection.handlebars"
    );

    try {
      const templateText2 = await removeCartSection.text();

      const templateFunction2 = Handlebars.compile(templateText2);

      const html2 = templateFunction2({ cartsIds });
    } catch (error) {
      return {
        error: `no se pudo convertir el template a texto. Error:  ${error}`,
      };
    }

    document.getElementById("removeCartSection").innerHTML = html2;
  } catch (error) {
    return {
      error: `no se pudo obtener el removeCartSection.handlebars. Error:  ${error}`,
    };
  }
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
  try {
    const productsInCart = await fetch(
      "/views/partials/cartProductSection.handlebars"
    );
    try {
      const templateText = await productsInCart.text();
      const templateFunction = Handlebars.compile(templateText);

      const html = templateFunction({ cartProductsById });
      document.getElementById("cartProductSection").innerHTML = html;
    } catch (error) {
      return { error: `Error:  ${error}` };
    }
  } catch (error) {
    return { error: `Error:  ${error}` };
  }
}
/** cargo los productos seleccionados al carrito */

async function removeItemFromCart(productId) {
  let headersList = {
    "Content-Type": "application/json",
  };

  const cartId = document.getElementById("activeCart").textContent;

  try {
    await fetch(`/api/carts/${cartId}/products/${productId}`, {
      method: "DELETE",
      headers: headersList,
      action: `/api/carts/${cartId}/products/${productId}`,
    }).catch((err) => console.log(err));
  } catch (error) {
    return { error: `Error:  ${error}` };
  }

  socket.emit("getCartProductsById", cartId);
}

async function addToCart(productId) {
  let headersList = {
    "Content-Type": "application/json",
  };

  try {
    const currentProd = await fetch(`/api/products/${productId}`, {
      method: "POST",
      headers: headersList,
      action: `/api/products/${productId}`,
    }).catch((err) => console.log(err));
  } catch (error) {
    return { error: `Error:  ${error}` };
  }

  try {
    const productResponse = await currentProd.json();

    const activeCartExist = document.getElementById("activeCart");
    const cartId = activeCartExist.textContent;
    let bodyContent = JSON.stringify(productResponse);

    if (cartId !== "activeCartExist") {
      try {
        await fetch(`/api/carts/${cartId}/products`, {
          method: "POST",
          body: bodyContent,
          headers: headersList,
          action: `/api/carts/${cartId}/products`,
        }).catch((err) => console.log(err));
      } catch (error) {
        return { error: `Error:  ${error}` };
      }
    } else {
      try {
        const newCartId = await fetch(`/api/carts`, {
          method: "POST",
          body: bodyContent,
          headers: headersList,
          action: `/api/carts`,
        }).catch((err) => console.log(err));

        cartId.textContent = newCartId;
        document.getElementById("activeCart2").textContent = newCartId;
      } catch (error) {
        return { error: `Error:  ${error}` };
      }
    }
  } catch (error) {
    return { error: `Error:  ${error}` };
  }

  socket.emit("getCartsIds");
}

function changeCartId() {
  const userCartId = document.getElementById("userCartId");

  const activeCart = document.getElementById("activeCart");
  const activeCart2 = document.getElementById("activeCart2");

  activeCart.textContent = userCartId.value;
  activeCart2.textContent = userCartId.value;

  socket.emit("getCartProductsById", userCartId.value);

  userCartId.value = "";
}

async function createNewCart() {
  let headersList = {
    "Content-Type": "application/json",
  };

  const activeCartExist = document.getElementById("activeCart");
  const cartId = activeCartExist.textContent;
  let bodyContent = "";
  try {
    
    const newCartId = await fetch(`/api/carts`, {
      method: "POST",
      body: bodyContent,
      headers: headersList,
      action: `/api/carts`,
    }).catch((err) => console.log(err));
  
    cartId.textContent = newCartId;
    document.getElementById("activeCart2").textContent = newCartId;
  } catch (error) {
    return {error:  `Error:  ${error}`}

  }

  socket.emit("getCartsIds");
}

async function saveCartId() {
  let headersList = {
    "Content-Type": "application/json",
  };

  const activeCartExist = document.getElementById("activeCart");
  const cartId = activeCartExist.textContent;

  try {
    await fetch(`/api/activeCartId/${cartId}`, {
      method: "POST",
      headers: headersList,
      action: `/api/activeCartId/${cartId}`,
    }).catch((err) => console.log(err));
    
  } catch (error) {
    return {error:  `Error:  ${error}`}

  }
}

async function removeCartById() {
  let headersList = {
    "Content-Type": "application/json",
  };

  const removeCartId = document.getElementById("activeCart");
  const removeCartId2 = document.getElementById("activeCart2");

  const cartIdOk = removeCartId.textContent;

  try {
    await fetch(`/api/carts/${cartIdOk}`, {
      method: "DELETE",
      headers: headersList,
      action: `/api/carts/${cartIdOk}`,
    }).catch((err) => console.log(err));
    removeCartId.textContent = "";
    removeCartId2.textContent = "";
    
  } catch (error) {
    return {error:  `Error:  ${error}`}

  }

  try {
    await fetch(`/api/resetCartId`, {
      method: "POST",
      headers: headersList,
      action: `/api/resetCartId`,
    }).catch((err) => console.log(err));
    
  } catch (error) {
    return {error:  `Error:  ${error}`}

  }

  // socket.emit("getCartProductsById", "");
}
