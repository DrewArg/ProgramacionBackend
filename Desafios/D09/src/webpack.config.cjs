const path = require('path')
module.exports = {
    mode: "development",
    entry: "./src/utils/normalizor.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "../public/dist")
    }
}