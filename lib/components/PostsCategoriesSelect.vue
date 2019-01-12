<template>
  <div class="tags-select">
    <label class="tag-checkbox">
      <input
        v-show="false"
        type="radio"
        :value="null"
        v-model="selectedCategory"
      >

      <IconTag name="all" />
    </label>

    <label
      v-for="category in Object.keys($categories)"
      :key="category"
      class="tag-checkbox"
    >
      <input
        v-show="false"
        type="radio"
        :value="category"
        v-model="selectedCategory"
      >

      <IconTag :name="category" />
    </label>
  </div>
</template>

<script>
import IconTag from '@theme/components/widgets/IconTag'

export default {
  name: 'PostsCategoriesSelect',

  components: {
    IconTag,
  },

  data () {
    return {
      selectedCategory: null,
    }
  },

  watch: {
    selectedCategory (val) {
      this.$emit('input', val)
    },
  },
}
</script>

<style lang="stylus" scoped>
@require '~@theme/styles/variables'

.tag-checkbox
  &:not(:first-child)
    margin-left 0.3rem
  input[type="radio"]:checked + .post-tag
    color $accentColor
    font-weight bold

</style>
