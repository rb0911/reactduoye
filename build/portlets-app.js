const path = require('path')
const fs = require('fs')
const url = require('url')

const appDirectory = fs.realpathSync(process.cwd()) //rocess.cwd() node js 执行进程时候的目录， __drame: 模块目录名称
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)

module.exports = {
    apps: [
        {name: 'uiTest', path: resolveApp('src/app/js/init.js')}
    ]
}