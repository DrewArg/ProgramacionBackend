const ArchiveContainer = require("./db/ArchiveContainer.js");

async function main() {

    const products = new ArchiveContainer('./db/products.txt');

    console.log(await products.getRandomProduct());

}

main();