const path = require('path')
const { logger } = require('@vuepress/shared-utils')
const markdownItCenterText = require('markdown-it-center-text')

module.exports = (opts, ctx) => {
  // set default theme config
  Object.assign(opts, Object.assign({
    lang: 'en-US',
    personalInfo: {},
    defaultPages: {},
    header: {},
    footer: {},
    infoCard: {},
    pagination: {
      perPage: 5,
    },
    comments: {},
    smoothScroll: true,
    zooming: {},
  }, opts))

  // resolve theme language
  if (typeof opts.lang === 'string') {
    try {
      require.resolve(`./langs/${opts.lang}`)
    } catch (e) {
      opts.lang = 'en-US'
      logger.warn(`[vuepress-theme-meteorlxy] lang '${opts.lang}' is not available, fallback to 'en-US'`)
    }
    opts.lang = require(`./langs/${opts.lang}`)
  }

  const { comments, lang, defaultPages, header, infoCard } = opts

  const noopGeo = (
    header.background && (
      header.background.url || header.background.useGeo === false
    )
  ) && (
    infoCard.headerBackground && (
      infoCard.headerBackground.url || infoCard.headerBackground.useGeo === false
    )
  )

  const options = {
    name: 'vuepress-theme-meteorlxy',

    plugins: [
      [require('./plugins/blog'), { lang }],
      ['@vuepress/plugin-back-to-top'],
      ['vuepress-plugin-container', { type: 'tip' }],
      ['vuepress-plugin-container', { type: 'warning' }],
      ['vuepress-plugin-container', { type: 'danger' }],
      ['vuepress-plugin-nprogress'],
      ['vuepress-plugin-redirect'],
      ['vuepress-plugin-serve'],
      ['vuepress-plugin-smooth-scroll', opts.smoothScroll === true],
      ['vuepress-plugin-table-of-contents'],
      [
        'vuepress-plugin-zooming',
        Object.assign({
          selector: '.content img',
        }, opts.zooming || {}),
      ],
      [
        '@vssue/vuepress-plugin-vssue',
        comments !== false
          ? Object.assign({
            platform: 'github',
          }, comments)
          : false,
      ],
    ],

    globalUIComponents: 'Iconfont',

    enhanceAppFiles: [
      path.resolve(__dirname, 'enhanceApp.js'),
    ],

    extendMarkdown: md => md.use(markdownItCenterText),

    chainWebpack (config, isServer) {
      if (noopGeo) {
        // point geopattern to noopModule
        config
          .resolve
          .alias
          .set('geopattern', path.resolve(__dirname, 'utils/noopModule'))
      } else {
        // to make geopattern work
        if (isServer === false) {
          config.node.set('Buffer', false)
        }
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

    async ready () {
      if (defaultPages.home !== false) {
        await ctx.addPage({
          permalink: '/',
          frontmatter: {
            title: lang.home,
            layout: 'Home',
          },
        })
      }

      if (defaultPages.posts !== false) {
        await ctx.addPage({
          permalink: '/posts/',
          frontmatter: {
            title: lang.posts,
            layout: 'Posts',
          },
        })
      }

      // filter draft posts in prod mode
      if (ctx.isProd) {
        ctx.pages.splice(
          0,
          ctx.pages.length,
          ...ctx.pages.filter(({ frontmatter }) => frontmatter.draft !== true),
        )
      }
    },
  }

  return options
}
