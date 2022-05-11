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
    res.sendFile('index.html', { root: './ejemploHandleBarsClase/views' })
})

// MIDDLEWARE
// Mira un middleware como si fuera un guardia de seguridad
// Está entre la peticion y el servidor
// Pueden verse como condiciones que ponés desde el lado del servidor, por ejemplo decir que se puedan utilizar jsons, lectura de formulario, motores de plantillas



// webRouter.get('/', async (req, res) => {
//     res.render('./public/templates/inicio.handlebars')
// })

webRouter.get('/datos', async (req, res) => {
    const nombre = ''
    const datos = {
        nombres: [
            { nombre: 'a' },
            { nombre: 'b' },
            { nombre: 'c' },

        ],
        hayNombres: Boolean(coleccion.length > 0),
        //!! --> distinto de null y distinto de udefinded
        coleccion: [1, 2, 3]
    }
    res.render('datos', datos)
})

module.exports = { webRouter }