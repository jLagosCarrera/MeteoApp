const CopyPlugin = require('copy-webpack-plugin');
const webpackMerge = require('webpack-merge');
const common = require('./webpack.config.common');

module.exports = webpackMerge(common, {
    mode: 'production',
    plugins: [
        new CopyPlugin([{
            from: './src/resources/translations',
            to: './resources/translations'
        }])
    ]
});