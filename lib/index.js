const path = require('path')

module.exports = (opts, ctx) => {
  // set default config
  if (typeof opts.lang === 'undefined') opts.lang = require('./langs/en-US')
  if (typeof opts.comments === 'undefined') opts.comments = {}
  if (typeof opts.personalInfo === 'undefined') opts.personalInfo = {}

  const { comments, lang } = opts

  const options = {
    name: 'vuepress-theme-meteorlxy',

    plugins: [
      [require('./plugins/blog'), { lang }],
      '@vuepress/plugin-nprogress',
      '@vuepress/plugin-back-to-top',
      '@vuepress/plugin-medium-zoom',
      'vuepress-plugin-smooth-scroll',
    ],

    globalUIComponents: 'Iconfont',

    enhanceAppFiles: [
      path.resolve(__dirname, 'enhanceApp.js'),
    ],

    chainWebpack (config, isServer) {
      if (isServer === false) {
        config.node.set('Buffer', false)
      }
    },

    ready () {
      ctx.addPage({
        permalink: '/',
        frontmatter: {
          title: lang.home,
          layout: 'Home',
        },
      })

      ctx.addPage({
        permalink: '/posts/',
        frontmatter: {
          title: lang.posts,
          layout: 'Posts',
        },
      })
    },
  }

  if (comments !== false) {
    options.plugins.push(
      ['@vssue/vuepress-plugin-vssue', Object.assign({
        platform: 'github',
      }, comments)],
    )
  }

  return options
}
