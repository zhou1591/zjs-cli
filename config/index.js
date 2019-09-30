/*
 * @Date: 2019-09-27 15:52:10
 * @information: 最后更新时间
 */
const plugins = require('./pulgins')
const loader = require('./loaders')
const devServer = require('./server')

module.exports={
    plugins,//插件
    loader,//loader
    devServer,// 本地服务
}