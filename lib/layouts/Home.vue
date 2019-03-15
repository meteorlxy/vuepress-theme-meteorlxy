<template>
  <div class="home">
    <PostsFilter
      v-if="search || tags || categories"
      v-model="posts"
      :posts="$posts"
      :categories="categories"
      :tags="tags"
      :search="search"
    />

    <PostsList :posts="posts" />
  </div>
</template>

<script>
import PostsFilter from '../components/PostsFilter.vue'
import PostsList from '../components/PostsList.vue'

export default {
  name: 'Home',

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

  computed: {
    homeFilters () {
      return this.$themeConfig.homeFilters || {}
    },

    categories () {
      return this.homeFilters.categories || false
    },

    tags () {
      return this.homeFilters.tags || false
    },

    search () {
      return this.homeFilters.search || false
    },
  },
}

</script>
