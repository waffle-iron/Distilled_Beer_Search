'use strict';

var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var commonConfig = require('./common.config');

var ENV = process.env.NODE_ENV = process.env.ENV = 'release';

module.exports = webpackMerge(commonConfig, {
    devtool: 'source-map',

    htmlLoader: {
        minimize: false },

    plugins: [new webpack.NoErrorsPlugin(), new webpack.optimize.DedupePlugin(), new webpack.optimize.UglifyJsPlugin({ // https://github.com/angular/angular/issues/10618
        mangle: {
            keep_fnames: true
        }
    }), new ExtractTextPlugin('[name].[hash].css'), new webpack.DefinePlugin({
        'process.env': {
            ENV: JSON.stringify(ENV)
        }
    })]
});
//# sourceMappingURL=release.config.js.map