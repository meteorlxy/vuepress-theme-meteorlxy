<template>
  <div class="categories">
    <div class="main-div">
      <h2>{{ $themeConfig.lang.categories }}</h2>

      <RouterLink
        v-for="cate in $categories.list"
        :key="cate.name"
        :to="cate.path"
      >
        <IconTag
          icon="category"
          :name="cate.name"
        />
      </RouterLink>
    </div>
  </div>
</template>

<script>
import IconTag from '../components/IconTag.vue'

export default {
  name: 'Categories',

  components: {
    IconTag,
  },
}
</script>
