/* eslint-disable no-var */
require('babel-polyfill');

var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanPlugin = require('clean-webpack-plugin');
var OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin');
var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
var webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./isomorphic-tools'));


var projectRoot = path.resolve(__dirname, '..');
var outputPath = path.resolve(projectRoot, './dist');

var assetsPath = 'assets';

var bootstrapConfig = './.bootstraprc';

module.exports = {
  devtool: 'source-map',
  context: projectRoot,
  entry: {
    main: [
      'babel-polyfill',
      `bootstrap-loader/extractStyles?configFilePath=${bootstrapConfig}`,
      './src/client.jsx'
    ]
  },
  output: {
    path: outputPath,
    filename: `${assetsPath}/[name]-[hash].js`,
    chunkFilename: `${assetsPath}/[name]-[chunkhash].js`,
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.json$/,
        use: ['json-loader', 'strip-json-comments-loader']
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 2,
                sourceMap: true,
                localIdentName: '[local]---[hash:base64:5]'
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: {
                  // See https://github.com/postcss/postcss-loader for details
                }
              }
            },
            {
              loader: 'sass-loader',
              options: {
                outputStyle: 'expanded',
                sourceMap: true
              }
            }
          ]
        })
      },
      {
        test: webpackIsomorphicToolsPlugin.regular_expression('images'),
        use: {
          loader: 'url-loader',
          options: {
            limit: 10240,
            outputPath: `${assetsPath}/`
          }
        }
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'application/font-woff',
            outputPath: `${assetsPath}/`
          }
        }
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'application/font-sfnt',
            outputPath: `${assetsPath}/`
          }
        }
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: `${assetsPath}/`
          }
        }
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        use: 'graphql-tag/loader'
      }
    ]
  },
  resolve: {
    modules: [
      'src',
      'node_modules'
    ],
    extensions: ['.js', '.jsx', '.json']
  },
  plugins: [
    new CleanPlugin([`${outputPath}`], { root: projectRoot }),
    // Extract css files
    new ExtractTextPlugin({
      filename: `${assetsPath}/[name]-[chunkhash].css`,
      allChunks: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      },
      __CLIENT__: true,
      __SERVER__: false,
      __DEVELOPMENT__: false,
      __DEVTOOLS__: false
    }),
    new webpack.IgnorePlugin(/\.\/dev/, /\/config$/),

    // Optimizations
    new UglifyJSPlugin({
      parallel: true,
      sourceMap: true,
      uglifyOptions: {
        compress: true,
        mangle: true,
      }
    }),
    new OptimizeCssPlugin(), // You can set options for this if you like
    webpackIsomorphicToolsPlugin
  ]
};
