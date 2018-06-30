import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import format from 'date-fns/format'

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
      const pageMap = p => {
        p.createdAt = format(p.frontmatter.date, 'YYYY-MM-DD')
        p.updatedAt = p.lastUpdated ? format(p.lastUpdated, 'YYYY-MM-DD') : null
        p.tags = p.frontmatter.tags || []
        p.category = p.frontmatter.category || null
        return p
      }
      const posts = pages.filter(pageFilter).sort(pageSort).map(pageMap)
      return posts
    },
    $categories () {
      let categoriesSet = new Set()
      for (const post of this.$posts) {
        if (post.category) {
          categoriesSet.add(post.category)
        }
      }
      return Array.from(categoriesSet)
    },
    $tags () {
      let tagsArr = []
      for (const post of this.$posts) {
        tagsArr = tagsArr.concat(post.tags)
      }
      return Array.from(new Set(tagsArr))
    }
  }
}

export default ({ Vue, options }) => {
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
