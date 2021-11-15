
const { promisify } = require('util')
const log = require('../lib/log')
const ora = require('ora')

module.exports.clone = async function(repo, desc) {
    const download = promisify(require('download-git-repo'))
    const loading = ora(`下载中.......${repo}`)
    loading.start()
    const res = await download(repo, desc, { clone: true })
    loading.succeed()
}