const chalk = require('chalk');

module.exports = (content, color = "green") => {
    console.log(chalk[color](content));
}