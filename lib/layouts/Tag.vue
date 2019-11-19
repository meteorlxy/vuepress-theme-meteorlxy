<template>
  <div class="tag">
    <PostsFilter
      v-model="posts"
      :posts="$tag.posts"
      :tags="false"
    />

    <PostsList :posts="posts" />
  </div>
</template>

<script>
import PostsFilter from '@theme/components/PostsFilter.vue'
import PostsList from '@theme/components/PostsList.vue'

export default {
  name: 'Tag',

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
    this.posts = this.$tag.posts
  },
}
</script>
