const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1 style="color:blue;">Bienvenidos al servidor express</h1>')
})

let visitors = 0;
app.get('/visitors', (req, res) => {
    res.send(`La cantidad de visitas es ${visitors++}`)
})

app.get('/fyh', (req, res) => {
    res.send({ fyh: new Date().toLocaleString() })
})

const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
})

server.on("error", e => console.log(`Error en servidor ${e}`))
