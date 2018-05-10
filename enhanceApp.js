import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default ({ Vue }) => {
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
