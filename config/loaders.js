/*
 * @Date: 2019-09-20 14:23:11
 * @information: 最后更新时间
 */
/**
 * @Author: 周靖松
 * @information: 导出路径函数
 * @Date: 2019-09-21 10:52:54
 */
const path = require('path')
function resolve(dir) {
    return path.join(__dirname, '..', dir)
}
module.exports = {
    module: {
        rules: [
            // css loader
            {
                test: /\.css$/,
                use: [{
                        loader: 'style-loader',
                        options: {
                            insertAt: 'top'
                        }
                    },
                    'css-loader'
                ]
            },
            // es6 babel
            {
                test: /\.js$/,
                include:[resolve('src')],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            }
            // ...
        ]
    }
}