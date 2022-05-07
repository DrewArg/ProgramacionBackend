// Otra forma:
const express = require('express')
const webRouter = express.Router()

webRouter.get('/', (req, res) => {
    res.sendFile('index.html', { root: './views' })
})


module.exports = { webRouter }