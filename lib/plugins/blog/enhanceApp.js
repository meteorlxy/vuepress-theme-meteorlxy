import compareDesc from 'date-fns/compare_desc'

export default ({ Vue }) => {
  Vue.mixin({
    computed: {
      $posts () {
        const pages = this.$site.pages
        const pageFilter = p => p.type === 'post'
        const pageSort = (p1, p2) => {
          if (p1.top === p2.top) {
            return compareDesc(p1.createdAt, p2.createdAt)
          }
          if (p1.top && p2.top) {
            return p1.top - p2.top
          }
          return p2.top ? 1 : -1
        }
        const posts = pages.filter(pageFilter).sort(pageSort)
        return posts
      },
    },
  })
}
