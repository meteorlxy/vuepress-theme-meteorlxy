<template>
  <div class="category">
    <PostsMain
      :posts="$category.posts"
      :category-filter="false"
    />
  </div>
</template>

<script>
import PostsMain from '../components/PostsMain.vue'

export default {
  name: 'Category',

  components: {
    PostsMain,
  },
}
</script>
