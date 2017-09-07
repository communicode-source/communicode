/* eslint-disable no-var */
require('babel-polyfill');

var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var host = (process.env.HOST || 'localhost');
var port = (+process.env.PORT + 1) || 3001;
var outputPath = path.resolve(__dirname, '../dist');

var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
var webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./isomorphic-tools'));

var bootstrapConfig = './.bootstraprc';

module.exports = {
  devtool: 'source-map',
  context: path.resolve(__dirname, '..'),
  entry: {
    main: [
      'babel-polyfill',
      'react-hot-loader/patch',
      `bootstrap-loader?configFilePath=${bootstrapConfig}`,
      `webpack-hot-middleware/client?path=http://${host}:${port}/__webpack_hmr`,
      './src/client.jsx'
    ]
  },
  output: {
    path: outputPath,
    filename: '[name]-[hash].js',
    chunkFilename: '[name]-[chunkhash].js',
    publicPath: `http://${host}:${port}/`
  },
  module: {
    rules: [
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        use: {
          loader: 'graphql-tag/loader'
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: [
          /node_modules/
        ],
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.json$/,
        use: ['json-loader', 'strip-json-comments-loader']
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
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
      },
      {
        test: webpackIsomorphicToolsPlugin.regular_expression('images'),
        use: {
          loader: 'url-loader',
          options: {
            limit: 10240,
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
          }
        }
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'file-loader',
        }
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __SERVER__: false,
      __DEVELOPMENT__: true,
      __DEVTOOLS__: true
    }),
    webpackIsomorphicToolsPlugin.development()
  ]
};
