const path = require('path')
const format = require('date-fns/format')

module.exports = ({
  postsDir = '_posts',
  postsLayout = 'Post',
  permalink = '/:year/:month/:day/:slug',
}) => {
  const ensureBothSlash = str => str.replace(/^\/?(.*)\/?$/, '/$1/')

  return {
    name: '@meteorlxy/vuepress-plugin-blog',

    extendPageData ($page) {
      // Test the page if is a post according to the postsDir
      if ($page.path.startsWith(ensureBothSlash(postsDir))) {
        // Set the meta data of the page
        $page.frontmatter.layout = $page.frontmatter.layout || postsLayout
        $page.frontmatter.permalink = $page.frontmatter.permalink || permalink
        $page.type = 'post'
        $page.tags = ($page.frontmatter.tags || []).map(tag => tag.toLowerCase())
        $page.category = ($page.frontmatter.category || '').toLowerCase()
        $page.createdAt = $page.frontmatter.date ? format($page.frontmatter.date, 'YYYY-MM-DD') : null
        $page.updatedAt = $page.lastUpdated ? format($page.lastUpdated, 'YYYY-MM-DD') : null
      }
    },

    enhanceAppFiles: [
      path.resolve(__dirname, 'enhanceApp.js'),
    ],
  }
}
