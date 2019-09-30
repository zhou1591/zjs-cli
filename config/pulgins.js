/*
 * @Date: 2019-09-20 14:20:41
 * @information: 最后更新时间
 */
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports={
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html',
            filename:'index.html',
            // chunks:['app'],
            minify:{
                removeAttributeQuotes: true, // 去除html文件中的引号
                collapseWhitespace: true // 合并空格，即将html进行单行显示
            },
            // hash:true,
        }),
    ]
}