const path = require('path')

module.exports = (options, ctx) => ({
  name: '@theme-meteorlxy/vuepress-plugin-theme',

  enhanceAppFiles: [
    path.resolve(__dirname, 'enhanceApp.js'),
  ],

  globalUIComponents: 'Iconfont',

  chainWebpack (config, isServer) {
    if (isServer === false) {
      config.node.set('Buffer', false)
    }
  },

  ready () {
    ctx.addPage({
      permalink: '/',
      frontmatter: {
        title: 'Home',
        layout: 'Home',
      },
    })

    ctx.addPage({
      permalink: '/posts/',
      frontmatter: {
        title: 'Posts',
        layout: 'Posts',
      },
    })
  },
})
