import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

const dataMixin = {
  computed: {
    $posts () {
      const pages = this.$site.pages
      const pageFilter = p => {
        return p.frontmatter.layout === 'post'
      }
      const pageSort = (p1, p2) => {
        return p1.frontmatter.date < p2.frontmatter.date
      }
      return pages.filter(pageFilter).sort(pageSort)
    },
    $tags () {
      let tagsArr = []
      for (const post of this.$posts) {
        tagsArr = tagsArr.concat(post.frontmatter.tags)
      }
      return Array.from(new Set(tagsArr))
    }
  }
}

export default ({ Vue }) => {
  Vue.mixin(dataMixin)
  Vue.component('FontAwesomeIcon', {
    functional: true,
    props: FontAwesomeIcon.props,
    render (h, context) {
      if (context.parent._isMounted) {
        return h(FontAwesomeIcon, context)
      } else {
        context.parent.$once('hook:mounted', () => {
          context.parent.$forceUpdate()
        })
      }
    }
  })
}
