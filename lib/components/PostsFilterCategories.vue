<template>
  <div class="tags-select">
    <label class="tag-checkbox">
      <input
        v-show="false"
        v-model="selectedCategory"
        type="radio"
        :value="null"
      >

      <IconTag
        icon="category"
        :name="$themeConfig.lang.allCategories"
      />
    </label>

    <label
      v-for="category in categories"
      :key="category"
      class="tag-checkbox"
    >
      <input
        v-show="false"
        v-model="selectedCategory"
        type="radio"
        :value="category"
      >

      <IconTag
        icon="category"
        :name="category"
      />
    </label>
  </div>
</template>

<script>
import IconTag from '@theme/components/IconTag.vue'

export default {
  name: 'PostsFilterCategories',

  components: {
    IconTag,
  },

  data () {
    return {
      selectedCategory: null,
    }
  },

  computed: {
    categories () {
      return Object.keys(this.$categories.map)
    },
  },

  watch: {
    selectedCategory (val) {
      this.$emit('input', val)
    },
  },
}
</script>
