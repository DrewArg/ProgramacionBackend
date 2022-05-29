const socket = io();

const form = document.getElementById('productForm');

form.addEventListener('submit', e => {
  e.preventDefault();
  addProduct();
})

// socket.on('hola', saludo => {
//   console.log("saludando");
//   socket.emit("chau")
// })


async function addProduct() {

  const title = document.getElementById("title").value;
  const price = document.getElementById("price").value;
  const thumbnail = document.getElementById("thumbnail").value;

  const product = {
    "title": title,
    "price": price,
    "thumbnail": thumbnail
  }


  await fetch("/api/products", {
    method: "POST",
    body: JSON.stringify(product),
    headers: {
      "Content-Type": "application/json",
    },
    action: "api/products"
  })
    .catch((err) => console.log(err));


  form.reset();

}

async function handleProductsEvent(products) {
  const productsTable = await fetch('./template/productTable.handlebars')

  const templateText = await productsTable.text();

  const templateFunction = Handlebars.compile(templateText)

  const html = templateFunction({ products })

  document.getElementById('productTable').innerHTML = html
}