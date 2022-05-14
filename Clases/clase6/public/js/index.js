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

document.getElementById('btn__ping').addEventListener('click', () => {
    socket.emit('ping');
})