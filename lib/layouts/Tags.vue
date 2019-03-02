<template>
  <div class="tags">
    <div class="main-div">
      <h2>{{ $themeConfig.lang.tags }}</h2>

      <RouterLink
        v-for="tag in $tags.list"
        :key="tag.name"
        :to="tag.path"
      >
        <IconTag
          icon="tag"
          :name="tag.name"
        />
      </RouterLink>
    </div>
  </div>
</template>

<script>
import IconTag from '../components/IconTag.vue'

export default {
  name: 'Tags',

  components: {
    IconTag,
  },
}
</script>
