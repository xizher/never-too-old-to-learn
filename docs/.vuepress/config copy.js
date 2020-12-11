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
        text: '下载',
        link: '/download'
    }, {
        text: '技术',
        link: '/article/technology/'
      }, {
        text: '日志',
        link: '/article/daily/'
      }, {
        text: '其他',
        link: '/article/other/'
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
        {
          title: '2020年12月',
          collapsable: true,
          children: [
            ['2020年12月10日', '2020年12月10日'],
            ['2020年12月8日', '2020年12月8日'],
            ['2020年12月7日', '2020年12月7日'],
          ]
        }
      ],
      '/article/technology/': [
        {
          title: 'Vue',
          collapsable: true,
          children: [
            ['vue3自定义组件v-model使用案例', 'vue3自定义组件v-model使用案例'],
            ['基于Vue项目的eslint配置', '基于Vue项目的eslint配置'],
            ['vue项目运行报错GETsockjs-node的解决方案', 'vue项目运行报错GETsockjs-node的解决方案']
          ]
        }, {
          title: 'GIS',
          collapsable: true,
          children: [
            ['ArcGIS_REST_API操作要素服务', 'ArcGIS REST API操作要素服务'],
            ['矢量切片与栅格切片的认知', '矢量切片与栅格切片的认知'],
            ['基于nginx的ArcGIS_API_for_JS本地部署及在Vue框架下跨域调用的解决方案', '基于nginx的ArcGIS API for JS本地部署及在Vue框架下跨域调用的解决方案'],
            ['大气校正法反演Landsat8影像地表温度', '大气校正法反演Landsat8影像地表温度'],
            ['R语言实现栅格块统计算法', 'R语言实现栅格块统计算法'],
            ['GoogleEarthEngine学习笔记', 'GoogleEarthEngine学习笔记'],
          ]
        }, {
          title: 'CSS',
          collapsable: true,
          children: [
            ['CSS_flex布局', 'CSS flex布局'],
            ['CSS点击穿透', 'CSS点击穿透'],
          ]
        }, {
          title: '数据库',
          collapsable: true,
          children: [
            ['数据库备份与还原的流程整理', '数据库备份与还原的流程整理']
          ]
        }, {
          title: '其他',
          collapsable: true,
          children: [
            ['npm包管理与发布', 'npm包管理与发布']
          ]
        }
      ]
    }
  }
}

module.exports = config