const express = require('express');
const { apiControllers } = require('./controllers/apiControllers.js')

const app = express();

app.get('/', (req, res) => {
    res.send('<h1 style="color:blue;">Bienvenidos al servidor express</h1>')
})


app.get('/products', apiControllers.products)
app.get('/randomProduct', apiControllers.randomProduct)

const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
})

server.on("error", e => console.log(`Error en servidor ${e}`))
