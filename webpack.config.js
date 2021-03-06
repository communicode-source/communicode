'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:3001',
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        path.join(__dirname, 'app/index.js'),
    ],
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: '[name].js',
        publicPath: '/',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: '!!html-loader!app/index.ejs.html',
            inject: 'body',
            filename: 'index.html',
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
            "global.GENTLY": false,
        }),
    ],
    eslint: {
        configFile: '.eslintrc',
        failOnWarning: false,
        failOnError: false,
    },
    node: {
        __dirname: true,
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint',
            },
        ],
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel',
            },
            {
                test: /\.json?$/,
                loader: 'json',
            },
          {
            test: /\.css?$/,
            loader: 'style!css'
          },
            {
                test: /\.scss$/,
                loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]!sass',
            },
            {test: /\.woff(2)?(\?[a-z0-9#=&.]+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
            {test: /\.(ttf|eot|svg)(\?[a-z0-9#=&.]+)?$/, loader: 'file'},
            {
                test: /\.(jpg|png)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[hash].[ext]',
                },
            },
        ],
    },
};
