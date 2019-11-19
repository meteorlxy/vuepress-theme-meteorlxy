<template>
  <div class="category">
    <PostsFilter
      v-model="posts"
      :posts="$category.posts"
      :categories="false"
    />

    <PostsList :posts="posts" />
  </div>
</template>

<script>
import PostsFilter from '@theme/components/PostsFilter.vue'
import PostsList from '@theme/components/PostsList.vue'

export default {
  name: 'Category',

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
    this.posts = this.$category.posts
  },
}
</script>
