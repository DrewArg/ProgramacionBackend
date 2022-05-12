const buttonSubmit = document.getElementById("btn__submit");
console.log("gola");
buttonSubmit.addEventListener("click", addProduct);

function addProduct() {
  const title = document.getElementById("title").value;
  const price = document.getElementById("price").value;
  const thumbnail = document.getElementById("thumbnail").value;

  const formData = new FormData();

  formData.append("title", title);
  formData.append("price", price);
  formData.append("thumbnail", thumbnail);

  fetch("./api/products", {
    method: "POST",
    body: formData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
