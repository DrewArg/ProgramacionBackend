const mensajes = [];

function obtenerMensajes() {
    return mensajes
}

function guardarMensaje(mensaje) {
    mensajes.push(mensaje)
}

module.exports = { obtenerMensajes, guardarMensaje }