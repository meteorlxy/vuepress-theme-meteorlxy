<template>
  <div class="tags-select">
    <label
      v-for="tag in Object.keys($tags)"
      :key="tag"
      class="tag-checkbox"
    >
      <input
        v-show="false"
        type="checkbox"
        :value="tag"
        v-model="selectedTags"
      >

      <IconTag :name="tag" />
    </label>
  </div>
</template>

<script>
import IconTag from '@theme/components/widgets/IconTag'

export default {
  name: 'PostsTagsSelect',

  components: {
    IconTag,
  },

  data () {
    return {
      selectedTags: [],
    }
  },

  watch: {
    selectedTags (val) {
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
  input[type="checkbox"]:checked + .post-tag
    color $accentColor
    font-weight bold

</style>
