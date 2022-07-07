const ArchiveContainer = require("./ArchiveContainer.js");



async function main() {

    const products = new ArchiveContainer('./products.txt');

    await products.save({
        id: 1,
        title: "Teléfono",
        price: 1200,
        thumbnail: "telefono.png"
    });

    await products.save({
        id: 2,
        title: "Televisor",
        price: 5000,
        thumbnail: "televisor.png"
    });

    await products.save({
        id: 3,
        title: "Computadora",
        price: 7800,
        thumbnail: "computadora.png"
    });

    await products.save({
        id: 4,
        title: "Auriculares",
        price: 700,
        thumbnail: "auriculares.png"
    });

    console.log(await products.getAll());
    console.log("");
    console.log(await products.getById(2));
    console.log("");
    await products.deleteById(2);
    console.log(await products.getAll());
    console.log("");
    console.log(await products.getById(2));
    console.log("");
    await products.deleteAll();
    console.log(await products.getAll());
    console.log("");

    await products.save({
        id: 5,
        title: "Pantalla",
        price: 4500,
        thumbnail: "pantalla.png"
    });

    console.log(await products.getAll());
    console.log("");
}

main();