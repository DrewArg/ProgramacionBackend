// Otra forma:
const express = require('express')
const webRouter = express.Router()


// webRouter.get('/', async (req, res) =>{
//     const templateText = await fs.promises.readFile('public/templates/incio.handlebars')
//     const templateFn = Handlebars.compile(templateText)
//     const html = templateFn({nombre: 'coder'})
//     res.send(html)
// })


webRouter.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'views' })
})

// MIDDLEWARE
// Mira un middleware como si fuera un guardia de seguridad
// Está entre la peticion y el servidor
// Pueden verse como condiciones que ponés desde el lado del servidor, por ejemplo decir que se puedan utilizar jsons, lectura de formulario, motores de plantillas



// webRouter.get('/', async (req, res) => {
//     res.render('./public/templates/inicio.handlebars')
// })

webRouter.get('/datos', async (req, res) => {
    res.render('datos.handlebars', { nombre: 'coder' })
})

module.exports = { webRouter }