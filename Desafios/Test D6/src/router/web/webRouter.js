const { Router } = require('express')
const { webGetRootController} = require('../../controller/webControllers.js')

const webRouter = new Router();

webRouter.get('/', webGetRootController)
webRouter.post('/', webGetRootController)

module.exports = webRouter

// webRouter.get('/datos', async (req, res) => {
//     const nombres = [
//         { nombre: 'a' },
//         { nombre: 'b' }
//     ]
//     const datos = {
//         nombres,
//         hayNombres: Boolean(nombres.length > 0),
//     }
//     res.render('./partials/datos', datos)
// })


// webRouter.get('/servicio', (req, res) => {
//     res.render('./partials/servicio', {
//         titulo: 'Servicio',
//         estado: true,
//         servicio: 'Curso de JavaScript'
//     })
// })


// webRouter.get('/equipo', (req, res) => {
//     res.render('./partials/equipo', {
//         titulo: 'Equipo',
//         // equipo: ['Diego', 'Only Players']
//         equipo: [
//             { id: 1, nombre: 'Javier' },
//             { id: 2, nombre: 'Steve' },
//             { id: 3, nombre: 'Ignacio' },
//         ]
//     })
// })


// webRouter.get('/*', webGet404)


// module.exports = { webRouter }