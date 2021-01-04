const path = require('path')
const rootPath = path.dirname(__dirname)
const utils = require('../../utils')
const fileHelper = require('../../utils/initPage')

const config = {
  title: '哲士',
  description: '地理信息人',
  head: [
    ['link', { rel: 'icon', href: '/img/favicon.ico' }]
  ],
  port: 8888,
  evergreen: true,
  themeConfig: {
    nav: [
      {
          text: '主页',
          link: '/'
      }, {
        text: '技术',
        link: '/article/technology/'
      }, {
        text: '日志',
        link: '/article/daily/'
      }, {
        text: '资源',
        link: '/download'
      }, {
        text: '关于',
        link: '/about/'
      }, {
        text: 'Github',
        link: 'https://www.github.com/xizher'
      },
    ],
    sidebar: {
      '/article/daily/': [
        ...utils.genSidebar('2020月12月', fileHelper.getFileName(`${rootPath}/article/daily/2020_12/`).map(item => `./2020_12/${item}`), true, 1),
        ...utils.genSidebar('2021月1月', fileHelper.getFileName(`${rootPath}/article/daily/2021_01/`).map(item => `./2021_01/${item}`), true, 1),
      ],
      '/article/technology/': [
          ...utils.genSidebar('GIS', fileHelper.getFileName(`${rootPath}/article/technology/gis/`).map(item => `./gis/${item}`), true, 1),
          ...utils.genSidebar('VUE', fileHelper.getFileName(`${rootPath}/article/technology/vue/`).map(item => `./vue/${item}`), true, 1),
          ...utils.genSidebar('工程化', fileHelper.getFileName(`${rootPath}/article/technology/project/`).map(item => `./project/${item}`), true, 1),
          ...utils.genSidebar('CSS', fileHelper.getFileName(`${rootPath}/article/technology/css/`).map(item => `./css/${item}`), true, 1),
          ...utils.genSidebar('数据库', fileHelper.getFileName(`${rootPath}/article/technology/database/`).map(item => `./database/${item}`), true, 1),
          ...utils.genSidebar('服务器', fileHelper.getFileName(`${rootPath}/article/technology/server/`).map(item => `./server/${item}`), true, 1),
      ],
    }
  }
}

console.log(config.themeConfig.sidebar['/article/technology/'])

module.exports = config