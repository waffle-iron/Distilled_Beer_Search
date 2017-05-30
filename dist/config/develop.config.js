'use strict';

var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var commonConfig = require('./common.config');

var ENV = process.env.NODE_ENV = process.env.ENV = 'develop';

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',

    output: {
        publicPath: 'http://localhost:8080'
    },

    plugins: [new ExtractTextPlugin('[name].css'), new webpack.DefinePlugin({
        'process.env': {
            ENV: JSON.stringify(ENV)
        }
    })],

    devServer: {
        historyApiFallback: {
            index: '/index.html'
        },
        stats: 'minimal'
    }
});
//# sourceMappingURL=develop.config.js.map