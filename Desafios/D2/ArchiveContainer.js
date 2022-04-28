const fs = require('fs');
const Product = require('./Product.js')

class ArchiveContainer {
    constructor(path) {
        this.path = path;
        this.products = [];
    }

    _saveFile() {
        const textFile = JSON.stringify(this.products, null, 2);
        return fs.promises.writeFile(this.path, textFile)
    }

    _readfile() {
        return fs.promises.readFile(this.path, 'utf-8')
            .then(text => {
                const productsArray = JSON.parse(text)
                this.products = productsArray;
            })
    }

    async save(productData) {
        const product = new Product(productData.id, productData.title, productData.price, productData.thumbnail)
        await this._readfile();
        this.products.push(product);
        await this._saveFile()
    }

    async getAll() {
        await this._readfile();
        return [...this.products];
    }

    async getById(id) {
        await this._readfile();
        const index = this.products.findIndex(product => product.id === id)
        if (this.products[index] == null) {
            return null;
        } else {
            return this.products[index];
        }
    }

    async deleteById(id) {
        await this._readfile();
        const index = this.products.findIndex(product => product.id === id)
        if (index !== -1) {
            this.products.splice(index, 1);
            await this._saveFile();
        }
    }

}

module.exports = ArchiveContainer