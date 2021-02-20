const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackManifestPlugin = require('webpack-manifest-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const mode = 'development';

module.exports = {
    devServer: {
        port: 9000,
        contentBase: path.resolve(__dirname, 'build'),
        hot: true,
        overlay: true
        //publicPath: '/assets/'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new HtmlWebpackPlugin({
            template: './src/template.html'
        }),
        new WebpackManifestPlugin(),
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: true }),
        new MiniCssExtractPlugin({
            filename: mode === 'production' ? '[name]-[contenthash].css' : '[name].css'
        })
    ],
    watch: true,
    mode: mode,
    devtool: "cheap-module-eval-source-map",
    entry: {
        index: './src/javascripts/index.ts',
        //another: './src/javascripts/another-module.js',
        //admin: './src/javascripts/admin.js'
    },
    output: {
        filename: mode === 'production' ? '[name]-[contenthash].js' : '[name].js',
        path: path.resolve(__dirname, 'build')
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        minimizer: [
            new TerserJSPlugin({}),
            new OptimizeCSSAssetsPlugin({})
        ],
    },
    resolve: {
        alias: {
            Javascripts: path.resolve(__dirname, 'src/javascripts/'),
            Stylesheets: path.resolve(__dirname, 'src/stylesheets/'),
            Images: path.resolve(__dirname, 'src/images/'),
            Downloaded_libs: path.resolve(__dirname, 'src/downloaded_libs')
        },
        modules: [path.resolve(__dirname, 'src/downloaded_libs'), 'node_modules'],
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.tsx?$/,
                //use: [
                //{
                    loader: 'ts-loader',
                //    options: {
                //    transpileOnly: true
                //    },
                //},
                //],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: true,
                        },
                    },
                    //'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        'autoprefixer',
                                        {
                                            overrideBrowserlist: ['last 3 versions', 'ie >9']
                                        }
                                    ]
                                ]
                            }
                        }
                    }
                ],
            },
            {
                test: /\.scss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: true
                        },
                    },
                    //'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        'autoprefixer',
                                        {
                                            overrideBrowserlist: ['last 3 versions', 'ie >9']
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    'sass-loader'
                ],
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: mode === 'production' ? '[name].[hash:7].[ext]' : '[name].[ext]'
                        },
                    },
                    { loader: 'image-webpack-loader' }
                ],
            }
        ]
    }

};