import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default ({ Vue }) => {
  Vue.component('FontAwesomeIcon', {
    functional: true,

    props: FontAwesomeIcon.props,

    /* eslint-disable-next-line vue/require-render-return */
    render (h, context) {
      if (context.parent._isMounted) {
        return h(FontAwesomeIcon, context)
      } else {
        context.parent.$once('hook:mounted', () => {
          context.parent.$forceUpdate()
        })
      }
    },
  })
}
