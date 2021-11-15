#! /usr/bin/env node

// #! 符号的名称叫 Shebang，用于指定脚本的解释程序
// Node CLI 应用入口文件必须要有这样的文件头


const program = require('commander');


program.version(require('../package.json').version);

program
        .command('create <name>')
        .option('-f --force', 'Overwrite target directory if it exists')
        .description('创建项目初始化结构')
        .action(async (name, options) => {
            require('../lib/create')(name, options)
        });


program.parse(process.argv);