/*
 * @Date: 2019-09-29 18:08:08
 * @information: 最后更新时间
 */
const inquirer = require('inquirer')
let optionsArr = [{
        name: "type",
        message: "你想创建一个什么类型得模板(vue|react|ssr)",
        default: 'vue'
    },
    {
        name: "tem",
        message: "你想创建一个什么样得项目('空模板：template|后台管理系统：adminTemplate')",
        default: 'template'
    }
]

module.exports = () => {
    return inquirer
        .prompt(optionsArr)
}