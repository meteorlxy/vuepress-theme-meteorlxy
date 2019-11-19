<template>
  <div class="tags-select">
    <label
      v-for="tag in tags"
      :key="tag"
      class="tag-checkbox"
    >
      <input
        v-show="false"
        v-model="selectedTags"
        type="checkbox"
        :value="tag"
      >

      <IconTag
        icon="tag"
        :name="tag"
      />
    </label>
  </div>
</template>

<script>
import IconTag from '@theme/components/IconTag.vue'

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

  computed: {
    tags () {
      return Object.keys(this.$tags.map)
    },
  },

  watch: {
    selectedTags (val) {
      this.$emit('input', val)
    },
  },
}
</script>
