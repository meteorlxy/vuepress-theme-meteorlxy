module.exports = {
  plugins: [
    '@vuepress/plugin-nprogress',
    require('./plugins/blog'),
    require('./plugins/index'),
  ],
}
