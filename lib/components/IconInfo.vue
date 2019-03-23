<script>
import Icon from './Icon.vue'

export default {
  name: 'IconInfo',

  functional: true,

  components: {
    Icon,
  },

  props: {
    href: {
      type: String,
      required: false,
      default: null,
    },

    size: {
      type: String,
      required: false,
      default: '1em',
    },

    title: {
      type: String,
      required: false,
      default: null,
    },

    type: {
      type: String,
      required: true,
    },
  },

  render (h, { props: { href, size, title, type }, children }) {
    const Component = href ? 'a' : 'span'
    return (
      <Component
        href={href}
        title={title}
      >
        <Icon
          class="info-icon"
          name={type}
          size={size}
          title={title}
        />

        <span class="info-text">
          { children }
        </span>
      </Component>
    )
  },
}
</script>
