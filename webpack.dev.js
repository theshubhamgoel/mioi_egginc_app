const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge")
const common = require("./webpack.common")

module.exports = merge(common, {
    mode: "development",
    devServer: {
        contentBase: path.join(__dirname, "public/"),
        historyApiFallback: true,
        port: 3000,
        publicPath: "/",
        hotOnly: true,
        proxy: {
            '/api': 'http://localhost:8080/api'
        }
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devtool: "eval-source-map",
})