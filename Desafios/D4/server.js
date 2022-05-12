const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const { apiControllers } = require("./controllers/apiControllers.js");

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use("/public", express.static('./public/'));

app.get("/", (req,res) =>{
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/api/products', apiControllers.products);
app.get('/api/products/:id',apiControllers.productById)
app.get('/api/randomProduct', apiControllers.randomProduct);

app.post('/api/products', apiControllers.products)

app.put('/api/products/:id',apiControllers.productById)

app.delete('/api/products/:id',apiControllers.productById)

const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});

server.on("error", (e) => console.log(`Error en servidor ${e}`));
