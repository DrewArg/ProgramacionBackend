const socket = io.connect();

console.log("cart.js");

socket.emit("getAllProducts");

socket.on("products", handleProductsEvent);

async function handleProductsEvent(products) {
    const productsTable = await fetch(
        "/views/partials/productSection.handlebars"
    );
    const templateText = await productsTable.text();

    const templateFunction = Handlebars.compile(templateText);

    const html = templateFunction({ products });
    document.getElementById('cartProductSection').innerHTML = html;
}