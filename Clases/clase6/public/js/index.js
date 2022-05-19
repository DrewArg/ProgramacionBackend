const socket = io()
//esto de abajo es una manera para corregir cuando se reinicia el ID de socket al refrescar el navegador (se verá mas adelante)
// const socket = io({
//     auth: {
//         userId: '123'
//     }
// })

// recibe el mismo evento que configure en el servidor para así poder hacer la conexión
socket.on('conexionOk', data => {
    console.log(data);
})

socket.on('mensajes', ({ mensajes }) => {
    console.log(mensajes);
    mostrarMensajes(mensajes)
})

// socket.on('JAJA es joda!', () => {
//     const msg = 'el servidor está aburrido y te está molestando'

//     // alert(msg)
//     document.getElementById('papaFrita').innerHTML(msg);
// })


// document.getElementById('btn__ping').addEventListener('click', () => {
//     socket.emit('ping');
//})

const btnEnviar = document.getElementById('btn__enviar').addEventListener('click', () => {
    // socket.emit('ping');
    const autor = document.getElementById('in__autor').value
    const texto = document.getElementById('in__texto').value
    socket.emit(`mensaje`, { autor, texto })
})

function armarListasDesordenadas(lineas) {
    const listItems = lineas.map(l => `<li>${l}</li>`)
    const html = `
    <ul>
    ${listItems.join('')}
    </ul>`

    return html
}

function mostrarMensajes(mensajes) {
    const divMensajes = document.getElementById('mensajes')
    const lineaMensajes = mensajes.map(o => `${o.autor}: ${o.texto}`)

    divMensajes.innerHTML = armarListasDesordenadas(lineaMensajes)
}