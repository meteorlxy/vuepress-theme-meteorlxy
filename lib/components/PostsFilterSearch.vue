<template>
  <div class="search-input">
    <label>
      <Icon
        name="search"
        :title="$themeConfig.lang.search"
      />

      <input
        type="text"
        :placeholder="$themeConfig.lang.searchHint"
        :value="value"
        @input="updateValue"
      >
    </label>
  </div>
</template>

<script>
import debounce from 'lodash.debounce'
import Icon from './Icon.vue'

export default {
  name: 'PostsFilterSearch',

  components: {
    Icon,
  },

  props: {
    value: {
      type: String,
      required: true,
    },
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

.search-input
  padding 0.4rem 0.6rem
  margin 0 0.2rem
  input
    outline none
    width 20rem
    max-width calc(100% - 1.5em)
    height 2rem
    font-size 0.9rem
    padding 0 0.7rem
    border 1px solid darken($borderColor, 10%)
    border-radius 2rem
    transition all .2s ease
    &:focus
      border-color $accentColor
</style>
