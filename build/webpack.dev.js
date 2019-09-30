/*
 * @Date: 2019-09-20 14:20:03
 * @information: 最后更新时间
 */
const path = require('path')
const { plugins,loader,devServer} = require('../config')

function resolve(dir) {
    return path.join(__dirname, '..',dir)
}
module.exports = {
    entry: './src/main.js',
    output: {
        path: resolve('dist'),
        libraryExport: 'default',
        // libraryTarget: 'commonjs2',
        filename: '[name].js',
        publicPath: '/'
    },
    // 压缩js
    mode: 'production',
    // 插件 html的  暂时用不上
    ...plugins,
    // css loader  暂时用不上
    ...loader,
    // 本地服务
    ...devServer,
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': resolve('src'),
        }
    },
}