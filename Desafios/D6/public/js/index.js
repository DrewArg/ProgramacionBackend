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

  await fetch("/api/products", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json",
    },
    action: "api/products"
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
