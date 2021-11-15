
const inquirer = require('inquirer')
const { promisify } = require('util')
const figlet = promisify(require('figlet'))
const log = require('./log')
const {clone} = require('./download')

const inquirerList = [{
        type: 'input',
        message: '使用什么语言',
        name: 'name',
    },{
        type: 'list',
        message: '选择',
        name: 'type',
        choices: ['vue', 'react'],
    },{
        type: 'checkbox',
        message: '选择box',
        name: 'check',
        choices: ['vue', 'react'],
    }]


module.exports = async (name, options) => {
    const welcome = await figlet("QHK Welcome")
    log(welcome);

    const answer = await inquirer.prompt(inquirerList);
    console.log(answer);

    log(`🚀 创建项目：${name}`)
    await clone('direct:https://github.com/Gavinqhk/MCommunity.git', name)

}