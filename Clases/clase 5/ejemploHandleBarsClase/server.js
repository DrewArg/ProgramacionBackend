const express = require('express')
const { webRouter } = require('./router/webRouter')

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: './views' })
})

app.use(webRouter)

const PORT = 8080

const server = app.listen(PORT, () => {
    console.log(`escuchando el puerto ${server.address().port}`);
})

