<script>
export default {
  name: 'Icon',

  functional: true,

  props: {
    color: {
      type: String,
      required: false,
      default: null,
    },

    name: {
      type: String,
      required: true,
    },

    size: {
      type: String,
      required: false,
      default: null,
    },

    title: {
      type: String,
      required: false,
      default: null,
    },
  },

  render (h, { props: { color, name, size, title } }) {
    return (
      <svg
        class="icon"
        style={{
          'fill': color,
          'font-size': size,
        }}
      >
        <title>
          { title || name }
        </title>

        <use xlinkHref={`#icon-${name}`} />
      </svg>
    )
  },
}
</script>

<style>
.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: #666;
  overflow: hidden;
}
</style>
