const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const portlets = require('./portlets-app')

const NODE_ENV = process.env.NODE_ENV
const entryList = []
const pluginList = []
const appArray = []

for(let i = 0; i < portlets.apps.lenth; i++){
    appArray.push(portlets.apps[i])
}

if (NODE_ENV === 'development') {
    pluginList.push(new CleanWebpackPlugin(['scpublic/*.*'], {
        root: path.resolve(__dirname, '../dist/akpublic/scpublic/'),
        verbose: true,
        dry: false
    }))
}

pluginList.push(new webpack.HotModuleReplacementPlugin())

for (let i = 0; i < appArray.length; i++) {
    entryList[appArray[i].name] = appArray[i].path
    pluginList.push(new HTMLWebpackPlugin({
        title: appArray[i].name,
        filename: './html/' + appArray[i].name + '.html',
        chunks: [appArray[i].name],
        template: path.join(__dirname, '../src/assets/html/tempalte.html')
    }))
}

module.exports = webpackMerge(baseConfig, {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry: entryList,
    output: {
        path: path.resolve(__dirname, '../dist/akpublic'),
        filename: '[name].js'
    },
    plugins: pluginList,
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
})