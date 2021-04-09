const { join } = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const DemoPlugin = require('./plugins/demo-plugin');
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

process.env.NODE_ENV = "production";

const config = {
    mode: "development",
    optimization: {
        splitChunks: {
            chunks: "all",
            cacheGroups: {
                common: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",//提取后的代码不需要修改hash添加
                    enforce: true
                }
            }
        },
        runtimeChunk: {
            name: entryPoint => `runtime~${entryPoint.name}`
        }
    },
    module: {
        rules: [
                    {
                        test: /\.(js|jsx)$/,
                        include: join(__dirname, "src"),
                        use: [
                            {
                                loader: "babel-loader"
                            }
                        ]
                    },
                    //css
                    {
                        test: /\.css$/,
                        include: join(__dirname, "src"),
                        use: [
                            {
                                loader: MiniCssExtractPlugin.loader,
                                options: {
                                    modules: true,
                                    options: {
                                        publicPath: "./css"
                                    }
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
                            {
                                loader: "css-loader",
                                options: {
                                    modules: true,
                                    esModule: true
                                }
                            }
                        ]
                    },
                    //less
                    {
                        test: /\.less$/,
                        include: join(__dirname, "src"),
                        use: [
                            {
                                loader: MiniCssExtractPlugin.loader,
                                options: {
                                    publicPath: "./css"
                                }
                            },
                            {
                                loader: "css-loader",
                                options: {
                                    modules: {
                                        mode: "local",
                                        exportGlobals: true,
                                        localIdentName: "[name]__[local]__[hash:base64:5]",
                                        context: join(__dirname, "src"),
                                        hashPrefix: "my-custom-hash"
                                    },
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
                    //image
                    {
                        test: [/\.png$/, /\.jpg$/, /\.jpeg$/, /\.gif$/, /\.webp$/],
                        include: join(__dirname, "src"),
                        use: [
                            {
                                loader: "url-loader",
                                options: {
                                    limit: 1024 * 8, // 文件小于10kb，输出DataUrl
                                    outputPath: "images", // 该路径相对于html输出路径
                                    publicPath: "./images",
                                    name: "[hash:10].[ext]",
                                    esModule: false
                                }
                            }
                        ]
                    },
                    //font
                    {
                        test: /\.(woff|woff2|eot|ttf|otf)$/,
                        include: join(__dirname, "src"),
                        use: [
                            "file-loader"
                        ]
                    },
                    //html
                    {
                        test: /\.html$/,
                        include: join(__dirname, "src"),
                        loader: "html-loader"
                    }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin(
            {
                template: "./public/index.html",
                filename: "index.html",
                hash: true,
                minify: {
                    collapseWhitespace: true,
                    removeComments: true
                }
            }
        ),
        new MiniCssExtractPlugin(
            {
                filename: "css/[name].[contentHash:4].css"
            }
        ),
        new OptimizeCssAssetsWebpackPlugin(),
        new DemoPlugin(),
        new WorkboxWebpackPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true

        })
    ]
    // stats: 'minimal'
};

module.exports = merge(common, config);
