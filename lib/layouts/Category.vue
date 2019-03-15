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
import PostsFilter from '../components/PostsFilter.vue'
import PostsList from '../components/PostsList.vue'

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
