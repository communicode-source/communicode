'use strict';

var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StatsPlugin = require('stats-webpack-plugin');
var FaviconsWebpackPlugin = require('favicons-webpack-plugin');
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');
var ImageminPlugin = require('imagemin-webpack-plugin').default;
var ImageminMozjpeg = require('imagemin-mozjpeg');

module.exports = {
    // The entry file. All your app roots fromn here.
    entry: [
        path.join(__dirname, 'app/index.js'),
    ],
    // Where you want the output to go
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'assets/[name]-[hash].min.js',
        publicPath: '/',
    },
    plugins: [
        // webpack gives your modules and chunks ids to identify them. Webpack can vary the
        // distribution of the ids to get the smallest id length for often used ids with
        // this plugin
        new webpack.optimize.OccurenceOrderPlugin(),

        // copies files from one place to another
        new CopyWebpackPlugin([
            {
                // 404 error page handler
                from: 'app/404.py'
            }
        ]),

        // handles creating an index.html file and injecting assets. necessary because assets
        // change name because the hash part changes. We want hash name changes to bust cache
        // on client browsers.
        new HtmlWebpackPlugin({
            template: 'app/index.tpl.html',
            inject: 'body',
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            template: 'app/index.tpl.html',
            inject: 'body',
            filename: '404.html',
        }),
        new FaviconsWebpackPlugin({
            logo: './app/assets/images/logo/C.png',
            prefix: 'assets/',
            persistentCache: true,
            inject: true,
            background: '#f2f2f2',
            title: 'Communicode',
            icons: {
                android: true,
                appleIcon: true,
                appleStartup: false,
                coast: false,
                favicons: true,
                firefox: false,
                opengraph: false,
                twitter: true,
                yandex: false,
                windows: true
            }
        }),
        // extracts the css from the js files and puts them on a separate .css file. this is for
        // performance and is used in prod environments. Styles load faster on their own .css
        // file as they dont have to wait for the JS to load.
        new ExtractTextPlugin('assets/[name]-[hash].min.css'),
        // handles uglifying js
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                dead_code: true,
                warnings: false,
                screw_ie8: true,
            },
        }),
        // creates a stats.json
        new StatsPlugin('webpack.stats.json', {
            source: false,
            modules: false,
        }),
        // plugin for passing in data to the js, like what NODE_ENV we are in.
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        new ImageminPlugin({
            optipng: {
                optimizationLevel: 3
            },
            gifsicle: {
                optimizationLevel: 3
            },
            jpegtran: null,
            svgo: {},
            plugins: [
                ImageminMozjpeg({
                    quality: 90,
                    progressive: true
                })
            ]

        }),
        /*
        new WebpackCleanupPlugin( {
            exclude: ['assets/icons/*']
        })
        */
    ],

    // ESLint options
    eslint: {
        configFile: '.eslintrc',
        failOnWarning: false,
        failOnError: true,
    },

    module: {
        // Runs before loaders
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint',
            },
        ],
        // loaders handle the assets, like transforming sass to css or jsx to js.
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
            loader: ExtractTextPlugin.extract('style', 'css?modules&localIdentName=[name]---[local]---[hash:base64:5]!sass'),
        }, {
            test: /\.woff(2)?(\?[a-z0-9#=&.]+)?$/,
            loader: 'url?limit=10000&mimetype=application/font-woff',
        }, {
            test: /\.(jpg|png|ttf|eot|svg)$/,
            loader: 'file-loader?name=assets/[hash].[ext]',
        }],
    },
    postcss: [
        require('autoprefixer'),
    ],
};
