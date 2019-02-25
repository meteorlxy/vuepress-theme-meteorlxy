module.exports = ({
  comments = {},
}) => {
  const options = {
    name: 'vuepress-theme-meteorlxy',

    plugins: [
      require('./plugins/theme'),
      require('./plugins/blog'),
      '@vuepress/plugin-nprogress',
      '@vuepress/plugin-back-to-top',
      '@vuepress/plugin-medium-zoom',
      'vuepress-plugin-smooth-scroll',
    ],
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
