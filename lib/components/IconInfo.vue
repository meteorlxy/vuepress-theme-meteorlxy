<script>
import Icon from './Icon.vue'
const typeIconMap = {
  'category': 'folder-open',
  'date': 'calendar',
  'email': 'mail',
  'location': 'location',
  'organization': 'team',
  'tag': 'tag',
  'tags': 'tags',
}

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
      validator: val => Object.keys(typeIconMap).includes(val),
    },
  },

  render (h, { props: { href, size, title, type }, children }) {
    const Component = href ? 'a' : 'span'
    const icon = typeIconMap[type]
    return (
      <Component
        href={href}
        title={title}
      >
        <Icon
          class="info-icon"
          name={icon}
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
