<template>
  <div class="tag">
    <PostsMain
      :posts="$tag.posts"
      :tag-filter="false"
    />
  </div>
</template>

<script>
import PostsMain from '../components/PostsMain.vue'

export default {
  name: 'Tag',

  components: {
    PostsMain,
  },
}
</script>
