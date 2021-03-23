
const { join } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require('webpack')

 const config = {
    mode: "development",
    devtool: 'eval',
    entry: ["./src/index.js", "./public/index.html"],
    output: {
        path: join(__dirname, "./dist"),
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: [/\.css$/, /\.less$/],
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            esModule: true
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            ident: "postcss",
                            plugins: (loader) => [
                                require("postcss-import")({ root: loader.resourcePath }),
                                require("postcss-cssnext")(),
                                require("cssnano")(),
                                require("postcss-preset-env")()
                            ]
                        }
                    },
                    "less-loader"
                ]
            },
            {
                test: [/\.css$/, /\.less$/],
                include: join(__dirname, "src/styles/global"),
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            ident: "postcss",
                            plugins: (loader) => [
                                require("postcss-import")({ root: loader.resourcePath }),
                                require("postcss-cssnext")(),
                                require("cssnano")(),
                                require("postcss-preset-env")()
                            ]
                        }
                    },
                    "less-loader"
                ]
            },
            {
                test: [/\.png$/, /\.jpg$/, /\.jpeg$/, /\.gif$/, /\.webp$/],
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 1024 * 10, // 文件小于10kb，输出DataUrl
                            outputPath: "images", // 该路径相对于html输出路径
                            publicPath: "../../images",
                            name: "[name].[ext]",
                            esModule: false
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    "file-loader"
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin(
            {
                template: "./public/index.html",
                filename: "index.html",
                inject: "body"
            }
        ),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        port: 8888,
        hot: true,
        open: true,
        contentBase: "./",
        clientLogLevel: 'none', //去掉控制台日志信息
        quiet: true //除了一些基本信息外，其他内容都不要显示
    }
};
module.exports = config
