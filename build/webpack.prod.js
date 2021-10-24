const path = require('path')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const OpimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const portlets = require('./portlets-app')

const entryList = []
const appArray = []

for(let i = 0; i < portlets.length; i++) {
    appArray.push(portlets.apps[i])
}

for (let i = 0; i < appArray.length; i ++) {
    entryList[appArray[i].name] = appArray[i].path
}

const config = webpackMerge(baseConfig, {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry: entryList,
    output: {
        path: path.resolve(__dirname, '../dist/akpublic'),
        filename: '[name].js'
    },

    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),

            new OpimizeCSSAssetsPlugin({})
        ]
    },

    plugins: [
        new CleanWebpackPlugin(
            ['dist/akpublic/*.*'],
            {
                root: path.resolve(__dirname, '../'),
                verbose: false,
                dry: false
            }
        )
    ]
})

module.exports = config