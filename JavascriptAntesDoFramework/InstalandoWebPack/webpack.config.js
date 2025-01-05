const path = require("path") 
const HTMLWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: path.resolve(__dirname, "src", "js", "index.js"), 
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    mode: "development",
    plugins: [new HTMLWebpackPlugin()],
    module:{
        rules: [
            {
                test: /\.css$/i, /* aqui podemos definir regras (rules), para isso usamos expressão regular */
                use: ["style-loader", "css-loader"]
            }
            
        ]
    }
}