const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.dev')
const fx = require('fs')

const appDirectory = fs.realpathSync(process.cwd()) //rocess.cwd() node js 执行进程时候的目录， __drame: 模块目录名称
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)
const createDevServerConfig = require('./server.config')

const protocol = process.env.HTTPS === 'true' ? 'https' : 'http'
const host = process.env.HOST || '0.0.0.0'

const config = webpackMerge(baseConfig, {
    mode: 'node',
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: resolveApp('dist'),
        openPage: 'dist/akpublic/scpublic/html/uitest.html',
        inline: true,
        port: 9000,
        https: protocol === 'https',
        host: host,
        overlay: {
            errors: true
        },
        hot: false,
        open: true,
        proxy: {
            '/sectateway/aectcomm/**': {
                'target': 'http://3333',
                'changeOrigin': true,
                "secure": false
            },
            '/gsmweb/**': {
                'target': 'http:/uat.citivelocity.com',
                'changeOrigin': true,
                "secure": false
            }
        }
    }
})

module.exports = config