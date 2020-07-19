module.exports = {
  title: '易新UI组件库',
  description: '一个好用的UI框架',
  themeConfig: {
    sidebar: [
      {
        title: '入门',
        collapsable: false,
        children:[
          '/install/',
          '/get-started/'
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/button',
          '/components/input',
          '/components/tabs',
          '/components/grid',
          '/components/layout',
          '/components/toast',
          '/components/collapse',
          '/components/popover',
        ]
      },
    ]
  }
}