'use strict'
const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

const port = 8013 // 端口配置


module.exports = {
    outputDir: 'dist',
    assetsDir: 'static',
    publicPath: './',
    devServer: {
        port: port,
        open: true,
        overlay: {
            warnings: false,
            errors: true
        },
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('src'),
            }
        }
    },


}
