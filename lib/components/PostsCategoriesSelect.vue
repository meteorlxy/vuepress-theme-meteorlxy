<template>
  <div class="tags-select">
    <label class="tag-checkbox">
      <input
        v-show="false"
        type="radio"
        :value="null"
        v-model="selectedCategory"
      >

      <IconTag
        icon="folder-open"
        name="all"
      />
    </label>

    <label
      v-for="category in Object.keys($categories.map)"
      :key="category"
      class="tag-checkbox"
    >
      <input
        v-show="false"
        type="radio"
        :value="category"
        v-model="selectedCategory"
      >

      <IconTag
        icon="folder-open"
        :name="category"
      />
    </label>
  </div>
</template>

<script>
import IconTag from './IconTag.vue'

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

<style lang="stylus">
@require '~@theme/styles/variables'

.tag-checkbox
  input[type="radio"]:checked + .post-tag
    color $accentColor
    .icon
      fill $accentColor
</style>
