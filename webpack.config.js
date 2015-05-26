'use strict';

var webpack     = require('webpack');
var HtmlWebpack = require('html-webpack-plugin');

module.exports = {
    entry: './demo/demo.jsx',
    module: {
        loaders: [
            { test: /\.(jsx|js)$/, loader: 'babel?loose=all', exclude: /node_modules/ }
        ]
    },
    output: {
        filename: 'demo-build/demo.min.js'
    },
    plugins: [
        new HtmlWebpack({
            filename : './demo-build/index.html',
            template : './demo/index.html'
        }),
        new webpack.optimize.OccurenceOrderPlugin()
    ]
};
