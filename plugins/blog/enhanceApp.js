import compareDesc from 'date-fns/compare_desc'

export default ({ Vue }) => {
  Vue.mixin({
    computed: {
      $posts () {
        const pages = this.$site.pages
        const pageFilter = p => p.type === 'post'
        const pageSort = (p1, p2) => compareDesc(p1.frontmatter.date, p2.frontmatter.date)
        const posts = pages.filter(pageFilter).sort(pageSort)
        return posts
      },

      $categories () {
        const categories = {}
        for (const post of this.$posts) {
          if (post.category) {
            if (Array.isArray(categories[post.category])) {
              categories[post.category].push(post)
            } else {
              categories[post.category] = [post]
            }
          }
        }
        return categories
      },

      $tags () {
        const tags = {}
        for (const post of this.$posts) {
          if (Array.isArray(post.tags)) {
            for (const tag of post.tags) {
              if (Array.isArray(tags[tag])) {
                tags[tag].push(post)
              } else {
                tags[tag] = [post]
              }
            }
          }
        }
        return tags
      },
    },
  })
}
