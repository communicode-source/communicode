require('babel-register');
var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

var CopyFilesPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
var sitemap = require('./app/sitemap');

module.exports = {
    entry: path.resolve(__dirname, 'server.prod.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'server.bundle.js',
        publicPath: '/',
        libraryTarget: 'umd'
    },
    target: 'node',
    // keep node_module paths out of the bundle
    externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
        'react-dom/server', 'react/addons',
    ]).reduce(function (ext, mod) {
        ext[mod] = 'commonjs ' + mod;
        return ext
    }, {}),
    plugins: [
        // plugin for passing in data to the js, like what NODE_ENV we are in.
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        new CopyFilesPlugin([
            {
                from: 'package.json'
            },
            {
                from: 'yarn.lock'
            },
            {
                from: 'app.yaml'
            }
        ]),
        new ExtractTextPlugin('/dev/null'),
        new StaticSiteGeneratorPlugin({
            paths: sitemap.staticPaths,
        }),
        // handles uglifying js
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                dead_code: true,
                warnings: false,
                screw_ie8: true,
            },
        }),
    ],
    node: {
        __filename: true,
        __dirname: true
    },

    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel',
        }, {
            test: /\.json?$/,
            loader: 'json',
        }, {
            test: /\.scss$/,
            // we extract the styles into their own .css file instead of having
            // them inside the js.
            loader: ExtractTextPlugin.extract('css?modules&localIdentName=[name]---[local]---[hash:base64:5]!sass'),
            //loader: 'css?modules&localIdentName=[name]---[local]---[hash:base64:5]!sass'
        }, {
            test: /\.(jpg|png|ttf|eot|svg)$/,
            loader: 'file-loader?emitFile=false&name=assets/[hash].[ext]',
        }],
    }
};
