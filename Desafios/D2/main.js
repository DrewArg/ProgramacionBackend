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

    console.log(`getAll: ${JSON.stringify(await products.getAll())}`);
    console.log(`getById (2): ${JSON.stringify(await products.getById(2))}`);
    await products.deleteById(2);
    console.log("");

    console.log("deleteById (2)");
    console.log(`getAll: ${JSON.stringify(await products.getAll())}`);
    console.log(`getById (2): ${JSON.stringify(await products.getById(2))}`);
    // await products.deleteAll();
    // console.log("");

    // console.log("deleteAll ");
    // console.log(`getAll: ${JSON.stringify(await products.getAll())}`);
}

main();