<script>
import Icon from './Icon.vue'

export default {
  name: 'IconTag',

  functional: true,

  props: {
    name: {
      type: String,
      required: true,
    },

    icon: {
      type: String,
      required: true,
    },

    size: {
      type: String,
      default: '1x',
    },
  },

  render (h, { props: { name, icon, size } }) {
    return (
      <span
        class="post-tag"
        title={name}
      >
        <Icon
          class="post-tag-icon"
          name={icon}
          size={size}
        />

        <span class="post-tag-name">
          { name }
        </span>
      </span>
    )
  },
}
</script>

<style lang="stylus">
@require '~@theme/styles/variables'

$gutter = 0.4rem
$fontSize = 1rem

.post-tag
  display inline-flex
  justify-content center
  margin 0 0.2rem
  height $fontSize + $gutter * 2
  line-height $fontSize
  padding $gutter $gutter * 1.5
  color lighten($grayTextColor, 10%)
  background-color #fff
  transition color 0.2s ease-out
  &:hover
    cursor pointer
    color $accentColor
    .icon
      fill $accentColor
  .post-tag-name
    display inline-block
    height 100%
    font-size $fontSize
    font-weight normal
    margin-left $gutter
  &:not(:first-of-type)
    margin-left $gutter
</style>
