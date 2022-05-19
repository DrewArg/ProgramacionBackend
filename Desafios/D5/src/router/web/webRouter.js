const express = require('express')

const webRouter = express.Router()

webRouter.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'views' })
})

webRouter.get('/datos', async (req, res) => {
    const nombres = [
        { nombre: 'a' },
        { nombre: 'b' }
    ]
    const datos = {
        nombres,
        hayNombres: Boolean(nombres.length > 0),
    }
    res.render('./partials/datos', datos)
})


webRouter.get('/servicio', (req, res) => {
    res.render('./partials/servicio', {
        titulo: 'Servicio',
        estado: true,
        servicio: 'Curso de JavaScript'
    })
})


webRouter.get('/equipo', (req, res) => {
    res.render('./partials/equipo', {
        titulo: 'Equipo',
        // equipo: ['Diego', 'Only Players']
        equipo: [
            { id: 1, nombre: 'Javier' },
            { id: 2, nombre: 'Steve' },
            { id: 3, nombre: 'Ignacio' },
        ]
    })
})


webRouter.get('/*', (req, res, next) => {
    res.status(404).render('./partials/404', {
        titulo: '404',
        descripcion: "Página no enconrtada"
    })
})


module.exports = { webRouter }