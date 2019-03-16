import Iconfont from './components/Iconfont.vue'

export default ({ Vue }) => {
  Vue.component('Iconfont', {
    functional: true,

    /* eslint-disable-next-line vue/require-render-return */
    render (h, { parent }) {
      if (parent._isMounted) {
        return h(Iconfont)
      } else {
        parent.$once('hook:mounted', () => {
          parent.$forceUpdate()
        })
      }
    },
  })
}
