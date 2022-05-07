const express = require('express')
const { webRouter } = require('./router/webRouter')

const { engine } = require('express-handlebars')


const app = express()
//desde el servidor puedo usar false

app.use(express.static('public'))

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

// const fs = require('fs')
// // con esto puedo generar un motor de plantillas propio
// app.engine('handlebars', async (filepath, options, callback) => {
//     try {
//         const content = await fs.promises.readFile(filepath)
//         const html = content.toString().replace('{{nombre}}', options.nombre)

//         //el null va primero para ver que no hubo un error , es por convencion
//         return callback(null, html)

//     } catch (error) {
//         return callback(new Error(err))

//     }

// })


// app.get('/', (req, res) => {
//     res.sendFile('index.html', { root: './views' })
// })

app.use(webRouter)

const PORT = 8080

const server = app.listen(PORT, () => {
    console.log(`escuchando el puerto ${server.address().port}`);
})

