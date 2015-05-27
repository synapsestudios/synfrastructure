/* globals __dirname */
'use strict';

var Webpack     = require('webpack');
var HtmlWebpack = require('html-webpack-plugin');
var path        = require('path');

module.exports = {
    entry: [
        './demo/bootstrap.js',
        'webpack-dev-server/client?http://localhost:9000'
    ],
    module: {
        loaders: [
            {
                test    : /\.(jsx|js)$/,
                loader  : 'babel?loose=all',
                exclude : /node_modules/
            },
            {
                test    : /\.scss$/,
                loader  : 'style!css!autoprefixer!sass?outputStyle=nested&includePaths[]=' + path.resolve(__dirname, 'node_modules'),
                include : /scss/
            },
            {
                test   : /\.css$/,
                loader : 'style-loader!css-loader'
            }
        ]
    },
    output: {
        filename   : 'demo.js',
        path       : path.resolve(__dirname, 'demo-build'),
        publicPath : '/'
    },
    resolve : {
        extensions : ['', '.js', '.jsx', '.css', '.scss']
    },
    plugins: [
        new HtmlWebpack({
            template : './demo/index.html'
        }),
        new Webpack.optimize.OccurenceOrderPlugin()
    ]
};
