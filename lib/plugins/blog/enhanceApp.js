export default ({ Vue }) => {
  Vue.mixin({
    computed: {
      $posts () {
        const pages = this.$site.pages
        const posts = pages.filter(p => p.type === 'post')
        return posts
      },
    },
  })
}
