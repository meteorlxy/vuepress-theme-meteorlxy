<template>
  <div class="search-box">
    <input
      @input="updateValue"
      aria-label="Search"
      :value="value"
      :class="{ 'focused': focused }"
      autocomplete="off"
      spellcheck="false"
      :placeholder="$themeConfig.lang.searchHint"
    >
  </div>
</template>

<script>
import debounce from 'lodash.debounce'

export default {
  name: 'PostsFilterSearch',

  props: {
    value: {
      type: String,
      required: true,
    },
  },
  data () {
    return {
      focused: false,
    }
  },
  computed: {
    updateValue () {
      return debounce(e => {
        this.$emit('input', e.target.value)
      }, 300)
    },
  },
}
</script>

<style lang="stylus" scoped>
@require '~@theme/styles/variables'
.search-box
  display inline-block
  position relative
  margin-right 1rem
  input
    cursor text
    width 20rem
    height: 2rem
    color lighten($textColor, 25%)
    display inline-block
    border 1px solid darken($borderColor, 10%)
    border-radius 2rem
    font-size 0.9rem
    line-height 2rem
    padding 0 0.5rem 0 2rem
    outline none
    transition all .2s ease
    background #fff url(search.svg) 0.6rem 0.5rem no-repeat
    background-size 1rem
    &:focus
      cursor auto
      border-color $accentColor
@media (max-width: $MQNarrow)
  .search-box
    display block
    input
      width 100%
      cursor pointer
      position relative
      &:focus
        cursor text
        left 0
// Match IE11
@media all and (-ms-high-contrast: none)
  .search-box input
    height 2rem
@media (max-width: $MQMobile)
  .search-box
    margin-right 0
</style>
