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
