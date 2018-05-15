<template>
  <span
    class="post-tag"
    :title="name">
    <FontAwesomeIcon
      class="post-tag-icon"
      :icon="icon"
      :size="size"
      :fixed-width="fixedWidth"
      v-bind="$attrs"/>

      <span class="post-tag-name">{{ name }}</span>
  </span>
</template>

<script>
import faTag from '@fortawesome/fontawesome-free-solid/faTag'

export default {
  name: 'PostTag',
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: '1x'
    },
    fixedWidth: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    icon () {
      return faTag
    }
  }
}
</script>

<style lang="stylus">
@import '~@theme/styles/variables.styl'

$paddingUnit = 0.3rem
$fontSize = 1rem

.post-tag
  display inline-block
  height $fontSize + $paddingUnit * 4
  line-height $fontSize
  padding $paddingUnit * 2 $paddingUnit * 3
  color lighten($grayTextColor, 10%)
  background-color #eee
  transition color 0.2s ease-out
  &:hover
    cursor pointer
    color $accentColor
  .post-tag-name
    display inline-block
    height 100%
    font-size $fontSize
    margin-left $paddingUnit
  &:not(:first-of-type)
    margin-left $paddingUnit

</style>
