module.exports = {
  plugins: [
    '@vuepress/plugin-nprogress',
    '@vuepress/plugin-back-to-top',
    // '@vuepress/plugin-blog',
    require('./plugins/blog'),
    require('./plugins/theme'),
  ],
}
