import compareDesc from 'date-fns/compare_desc'

export default ({ Vue }) => {
  Vue.mixin({
    computed: {
      $posts () {
        const pages = this.$site.pages
        const pageFilter = p => p.type === 'post'
        const pageSort = (p1, p2) => compareDesc(p1.createdAt, p2.createdAt)
        const posts = pages.filter(pageFilter).sort(pageSort)
        return posts
      },
    },
  })
}
