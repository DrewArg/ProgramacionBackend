// async function main() {
//   const response = await fetch('/templates/inicio.handlebars')
//   const templateText = await response.text()
//   const templateFn = Handlebars.compile(templateText); // compila la plantilla
//   const html = templateFn({ nombre: 'coder' }); // genera el html
//   document.getElementById('espacioParaContenido').innerHTML = html; // inyecta el resultado en la vista
// }

// main()

const buttonSubmit = document.getElementById("btn__submit");
console.log("gola");
buttonSubmit.addEventListener("click", addProduct);

async function addProduct() {
  const title = document.getElementById("title").value;
  const price = document.getElementById("price").value;
  const thumbnail = document.getElementById("thumbnail").value;

  const formData = {
    "title": title,
    "price": price,
    "thumbnail": thumbnail
  }
  // const formData = new FormData();

  // formData.append("title", title);
  // formData.append("price", price);
  // formData.append("thumbnail", thumbnail);

  await fetch("/api/products", {
    method: "POST",
    body: formData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
    action: "api/products"
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
