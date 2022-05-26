const mensajes = [
    {
        autor: 'meri',
        texto: 'hola'
    },
    {
        autor: 'andy',
        texto: 'chau'
    },

];

function getMensajes() {
    return mensajes;
}

function agregarMensaje(mensaje) {
    mensajes.push(mensaje)
}

module.exports = { getMensajes, agregarMensaje }