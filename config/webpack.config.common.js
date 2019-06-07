const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = {
    entry: './src/app/app.module.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: './src/index.html',
            filename: './index.html'
        }),
        new FaviconsWebpackPlugin('./src/resources/img/favicon.png'),
        new Dotenv({
            systemvars: true,
        })
    ],
    module: {
        rules: [{
                test: /\.(html)$/,
                use: ['html-loader']
            },
            {
                test: /\.(s*)css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['url-loader']
            },
            {
                test: /\.(png|jpg|svg)$/,
                use: ['url-loader']
            }
        ]
    }
}