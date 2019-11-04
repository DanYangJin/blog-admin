/* eslint-disable */

const path = require('path')
const webpack = require('webpack')

function resolve (dir) {
  return path.join(__dirname, './', dir)
}

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
        .set('assets', resolve('src/assets'))
    config.module.rules.delete('svg')
    config.module
        .rule('svg-sprite-loader')
        .test(/\.svg$/)
        .include
        .add(resolve('src/icons')) // 处理svg目录
        .end()
        .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({
          symbolId: 'icon-[name]'
        })
  },
  devServer: {
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'primary-color': '#5784FF', // 全局主色
          'success-color': '#52c41a', // 成功色
          'warning-color': '#faad14', // 警告色
          'error-color': '#f5222d', // 错误色
          'font-size-bas': '14px', // 主字号
          'border-radius-base': '4px' // 组件/浮层圆角
        },
        javascriptEnabled: true
      }
    }
  }
}
