const webpackMerge = require('webpack-merge');
const common = require('./webpack.config.common');
const path = require('path');

module.exports = webpackMerge(common, {
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, "../src"),
        compress: true,
        port: 9000
    }
});