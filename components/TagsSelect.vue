<template>
  <div class="tags-select">
    <label
      v-for="tag in $tags"
      :key="tag"
      class="tag-checkbox">
      <input
        v-show="false"
        type="checkbox"
        :value="tag"
        v-model="selectedTags"/>

      <PostTag :name="tag"/>
    </label>
  </div>
</template>

<script>
import PostTag from '@theme/components/widgets/PostTag'
export default {
  name: 'TagsSelect',
  components: {
    PostTag
  },
  data () {
    return {
      selectedTags: []
    }
  },
  watch: {
    selectedTags (val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@theme/styles/variables.styl'

.tag-checkbox
  &:not(:first-child)
    margin-left 0.3rem
  input[type="checkbox"]:checked + .post-tag
    color $accentColor
    font-weight bold

</style>
