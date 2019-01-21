<template>
  <div class="categories">
    <div class="main-div">
      <h2>文章分类 | Categories</h2>

      <RouterLink
        v-for="cate in $categories.list"
        :key="cate.name"
        :to="cate.path"
      >
        <IconTag
          icon="folder-open"
          :name="cate.name"
        />
      </RouterLink>
    </div>
  </div>
</template>

<script>
import IconTag from '../IconTag.vue'

export default {
  name: 'Categories',

  components: {
    IconTag,
  },
}
</script>
