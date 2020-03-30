// const isProd = process.env.NODE_ENV === "production";
const pkg = require('./package.json')
const moment = require('moment')

process.env.VUE_APP_VERSION = pkg.version
process.env.VUE_APP_UPDATE_TIME = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')

if (!process.env.PROXY_API_URL) {
  console.error('缺少.env或.env配置错误')
  process.exit(1)
}
let objectProject = {
  index: {
    entry: 'src/pages/index/main.js', // page 的入口
    template: 'public/index.html', // 模板来源
    filename: 'index.html',
    title: 'B端服务平台系统',
    // 在这个页面中包含的块，默认情况下会包含
    // 提取出来的通用 chunk 和 vendor chunk。
    chunks: ['chunk-vendors', 'chunk-common', 'index']
  },
  serviceProvider: {
    entry: 'src/pages/serviceProvider/main.js', // page 的入口
    template: 'public/serviceProvider.html', // 模板来源
    filename: 'serviceProvider.html',
    title: '服务商平台',
    // 在这个页面中包含的块，默认情况下会包含
    // 提取出来的通用 chunk 和 vendor chunk。
    chunks: ['chunk-vendors', 'chunk-common', 'serviceProvider']
  },
  merchant: {
    entry: 'src/pages/merchant/main.js', // page 的入口
    template: 'public/merchant.html', // 模板来源
    filename: 'merchant.html',
    title: '商户平台',
    // 在这个页面中包含的块，默认情况下会包含
    // 提取出来的通用 chunk 和 vendor chunk。
    chunks: ['chunk-vendors', 'chunk-common', 'merchant']
  }
}

let page = {}
let projectname = process.argv[3] // 获取执行哪个文件
if (process.env.NODE_ENV == 'development') {
  page = objectProject
} else {
  if (objectProject[projectname]) {
    console.log(`打包页面-------${projectname === 'serviceProvider' ? '服务商平台' : '商户平台'}------`)
    page[projectname] = objectProject[projectname]
  } else {
    console.log(`打包页面-------'服务商平台' -- '商户平台'------`)

    page = objectProject
  }
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  pages: page,
  devServer: {
    open: true,
    // before(app) {
    //   app.get(`/`, (req, res, next) => {
    //     res.redirect(true ? `serviceProvider.html#/basics/` : `merchant.html#/basics/`)
    //   })
    // },
    // index: '/serviceProvider.html',
    port: 8080, // 设置代理
    proxy: {
      '/': {
        target: process.env.PROXY_API_URL,
        ws: false,
        changeOrigin: true
      }
    }
  }
}
