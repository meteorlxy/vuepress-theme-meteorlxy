<template>
  <div class="posts">
    <div class="main-div">
      <h3 class="filter-categories">
        <RouterLink to="/posts/categories/">
          {{ $themeConfig.lang.categories }}
        </RouterLink>
      </h3>

      <PostsFilterCategories v-model="filterCategory" />

      <h3 class="filter-tags">
        <RouterLink to="/posts/tags/">
          {{ $themeConfig.lang.tags }}
        </RouterLink>
      </h3>

      <PostsFilterTags v-model="filterTags" />
    </div>

    <PostsList
      :posts="filteredPosts"
    />
  </div>
</template>

<script>
import PostsList from '../components/PostsList.vue'
import PostsFilterCategories from '../components/PostsFilterCategories.vue'
import PostsFilterTags from '../components/PostsFilterTags.vue'

export default {
  name: 'Posts',

  components: {
    PostsList,
    PostsFilterCategories,
    PostsFilterTags,
  },

  data () {
    return {
      filterTags: [],
      filterCategory: null,
    }
  },

  computed: {
    filteredPosts () {
      let filteredPosts = this.$posts

      if (this.filterCategory) {
        filteredPosts = filteredPosts.filter(p => p.category === this.filterCategory)
      }

      if (this.filterTags.length !== 0) {
        filteredPosts = filteredPosts.filter(p => {
          const postTags = p.tags
          for (const tag of this.filterTags) {
            if (postTags.includes(tag)) {
              return true
            }
          }
          return false
        })
      }

      return filteredPosts
    },
  },
}
</script>

<style lang="stylus">
@require '~@theme/styles/variables'

.filter-categories,
.filter-tags
  a
    color $textColor
</style>
