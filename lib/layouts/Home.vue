<template>
  <div class="home">
    <PostsMain
      :category-filter="false"
      :tag-filter="false"
    />
  </div>
</template>

<script>
import PostsMain from '../components/PostsMain.vue'

export default {
  name: 'Home',

  components: {
    PostsMain,
  },
}
</script>
