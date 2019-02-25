module.exports = ({
  comments = {},
}) => {
  return {
    name: 'vuepress-theme-meteorlxy',

    plugins: [
      '@vuepress/plugin-nprogress',
      '@vuepress/plugin-back-to-top',
      '@vuepress/plugin-medium-zoom',
      ['@vssue/vuepress-plugin-vssue', Object.assign({
        platform: 'github',
      }, comments)],
      'vuepress-plugin-smooth-scroll',
      require('./plugins/blog'),
      require('./plugins/theme'),
    ],
  }
}
