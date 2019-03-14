<template>
  <div class="posts">
    <PostsMain
      :posts="this.$posts"
    />
  </div>
</template>

<script>
import PostsMain from '../components/PostsMain.vue'

export default {
  name: 'Posts',

  components: {
    PostsMain,
  },
}
</script>
