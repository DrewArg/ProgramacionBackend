async function main() {
    const response = await fetch('templates/inicio.handlebars')

    const text = await response.text;
    // const templateText = '<h1>{{nombre}}</h1>)';

    //si quiero acceder a un archivo desde el cliente al servidor, hago publico desde el express ( carpeta plantillas)
    // compila la plantilla
    const templateFn = Handlebars.compile(text)
    const html = templateFn({ nombre: 'coder' }); // genera el html
    // console.log(html);
    document.querySelector('span').innerHTML = html; // inyecta el resultado en la vista
    document.getElementById('container').innerHTML = html;
}


