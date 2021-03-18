
const { join } = require('path')
const WebpackBar = require('webpackbar')

module.exports = {
    entry: "./src/index.js",
    output: {
        path: join(__dirname, "./dist"),
        filename: "js/[name].[contentHash:4].bundle.js"
    },
    plugins: [
        new WebpackBar()
    ],
    resolve: {
        alias: {
            "@": join(__dirname, "./src"),
            "@assets": join(__dirname, "./src/assets"),
            "@components": join(__dirname, "./src/components"),
            "@layouts": join(__dirname, "./src/layouts"),
            "@pages": join(__dirname, "./src/pages"),
            "@router": join(__dirname, "./src/router"),
            "@services": join(__dirname, "./src/services"),
            "@store": join(__dirname, "./src/store"),
            "@utils": join(__dirname, "./src/utils")
        },
        extensions: [".json", ".js", ".jsx", ".ts", ".tsx", ".css", ".less", "scss", ".styl"],
        mainFiles: ["index"],
        modules: [join(__dirname, "src"), "node_modules"]
    },
    externals: {
        jquery: "Jquery"
    }
};
