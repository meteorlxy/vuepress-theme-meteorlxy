module.exports = ({
  comments = {},
}) => {
  return {
    plugins: [
      '@vuepress/plugin-nprogress',
      '@vuepress/plugin-back-to-top',
      '@vuepress/plugin-medium-zoom',
      ['@vssue/vuepress-plugin-vssue', Object.assign({
        platform: 'github',
      }, comments)],
      require('./plugins/blog'),
      require('./plugins/theme'),
    ],
  }
}
