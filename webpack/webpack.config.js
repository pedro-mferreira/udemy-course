const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const modoDev = process.env.NODE_ENV !== 'production'
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry:'./src/principal.js',
    output:{
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        })
    ],
    devServer:{
        contentBase: "./public",
        port: 9000
    },
    optimization:{
        minimizer: [
            new TerserPlugin({
                parallel: true,
                terserOptions: {
                    ecma: 6,
                },
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    module: {
        rules: [{
            test: /\.s?[ac]ss$/, 
            use: [
                MiniCssExtractPlugin.loader,
                //'style-loader', //Adiciona CSS a DOM injetando a tag <style>
                'css-loader', //interpreta @import, url()
                'sass-loader'
            ]
        },{
            test: /\.(png|svg|jpeg|gif)$/,
            use: ['file-loader']
        }]
    }
}