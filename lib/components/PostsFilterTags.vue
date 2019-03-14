<template>
  <div class="tags-select">
    <label
      v-for="tag in Object.keys($tags.map)"
      :key="tag"
      class="tag-checkbox"
    >
      <input
        v-show="false"
        type="checkbox"
        :value="tag"
        v-model="selectedTags"
      >

      <IconTag
        icon="tag"
        :name="tag"
      />
    </label>
  </div>
</template>

<script>
import IconTag from './IconTag.vue'

export default {
  name: 'PostsFilterTags',

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
  input[type="checkbox"]:checked + .post-tag
    color $accentColor
    .icon
      fill $accentColor
</style>
