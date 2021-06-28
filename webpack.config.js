const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode : 'development',
    entry : {
        customapp : './src/customapp.jsx'
    },
    module : {
        rules : [
            {
                test : /\.(js|jsx)$/, 
                use : ['babel-loader']
            },
            {
                test: /\.(s(a|c)ss)$/,
                use: ['style-loader','css-loader', 'sass-loader']
            },           
            
        ]
    },
    resolve : {
        extensions: ['*', '.js', '.jsx']
    },
    plugins : [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title : 'Test Aeromexico',
            template : './src/template.ejs',
            filename : 'testGenerator.html',
            chunks : ['customapp']
        })
    ],
    output : {
        filename : '[name].bundle.js',
        path : path.resolve(__dirname, 'dist'),
        publicPath : '/'
    },
    devtool : 'inline-source-map'
}