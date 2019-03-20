const path = require('path')

module.exports = (opts, ctx) => {
  // set default config
  if (typeof opts.lang === 'undefined') opts.lang = require('./langs/en-US')
  if (typeof opts.comments === 'undefined') opts.comments = {}
  if (typeof opts.personalInfo === 'undefined') opts.personalInfo = {}
  if (typeof opts.defaultPages === 'undefined') opts.defaultPages = {}
  if (typeof opts.header === 'undefined') opts.header = {}
  if (typeof opts.header.background === 'undefined') opts.header.background = {}
  if (typeof opts.plugins === 'undefined') opts.plugins = {}

  const { comments, lang, defaultPages } = opts

  const options = {
    name: 'vuepress-theme-meteorlxy',

    plugins: [
      [require('./plugins/blog'), { lang }],
      '@vuepress/plugin-back-to-top',
      ['vuepress-plugin-container', { type: 'tip' }],
      ['vuepress-plugin-container', { type: 'warning' }],
      ['vuepress-plugin-container', { type: 'danger' }],
      'vuepress-plugin-nprogress',
      ['vuepress-plugin-smooth-scroll', opts.plugins['smooth-scroll'] || {}],
      ['vuepress-plugin-zooming', opts.plugins['zooming'] || {}],
    ],

    globalUIComponents: 'Iconfont',

    enhanceAppFiles: [
      path.resolve(__dirname, 'enhanceApp.js'),
    ],

    chainWebpack (config, isServer) {
      // to make geopattern work
      if (isServer === false) {
        config.node.set('Buffer', false)
      }

      // to use jsx syntax with evergreen config
      if (ctx.siteConfig.evergreen) {
        config.module
          .rule('js')
          .test(/\.js$/)
          .exclude.add(filePath => {
            if (filePath.startsWith(path.resolve(__dirname))) {
              return false
            }
            return true
          }).end()
          .use('cache-loader')
          .loader('cache-loader')
          .options({
            cacheDirectory: ctx.cacheDirectory,
            cacheIdentifier: ctx.cacheIdentifier,
          })
          .end()
          .use('babel-loader')
          .loader('babel-loader')
          .options({
            babelrc: false,
            configFile: false,
            presets: [
              require.resolve('@vue/babel-preset-jsx'),
            ],
          })
      }
    },

    ready () {
      if (defaultPages.home !== false) {
        ctx.addPage({
          permalink: '/',
          frontmatter: {
            title: lang.home,
            layout: 'Home',
          },
        })
      }

      if (defaultPages.posts !== false) {
        ctx.addPage({
          permalink: '/posts/',
          frontmatter: {
            title: lang.posts,
            layout: 'Posts',
          },
        })
      }
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
