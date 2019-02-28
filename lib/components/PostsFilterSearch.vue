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
        v-model="value"
      >
    </label>
  </div>
</template>

<script>
import Icon from './Icon.vue'

export default {
  name: 'PostsFilterSearch',

  components: {
    Icon,
  },

  data () {
    return {
      value: '',
    }
  },
}
</script>

<style lang="stylus" scoped>
@require '~@theme/styles/variables'

.search-input
  padding 0.4rem 0.6rem
  margin 0 0.2rem
</style>
