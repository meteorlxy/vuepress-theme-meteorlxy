<template>
  <div class="posts">
    <PostsFilter
      v-model="posts"
      :posts="$posts"
    />

    <PostsList :posts="posts" />
  </div>
</template>

<script>
import PostsFilter from '@theme/components/PostsFilter.vue'
import PostsList from '@theme/components/PostsList.vue'

export default {
  name: 'Posts',

  components: {
    PostsFilter,
    PostsList,
  },

  data () {
    return {
      posts: null,
    }
  },

  created () {
    this.posts = this.$posts
  },
}
</script>
