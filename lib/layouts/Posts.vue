<template>
  <div class="posts">
    <div class="main-div">
      <h3 class="link-categories">
        <RouterLink to="/posts/categories/">
          {{ $themeConfig.lang.categories }}
        </RouterLink>
      </h3>

      <PostsFilterCategories v-model="selectedCategory" />

      <h3 class="link-tags">
        <RouterLink to="/posts/tags/">
          {{ $themeConfig.lang.tags }}
        </RouterLink>
      </h3>

      <PostsFilterTags v-model="selectedTags" />
    </div>

    <PostsList
      class="main-div"
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
      selectedTags: [],
      selectedCategory: null,
    }
  },

  computed: {
    filteredPosts () {
      let filteredPosts = this.$posts

      if (this.selectedCategory) {
        filteredPosts = filteredPosts.filter(p => p.category === this.selectedCategory)
      }

      if (this.selectedTags.length !== 0) {
        filteredPosts = filteredPosts.filter(p => {
          const postTags = p.tags
          for (const tag of this.selectedTags) {
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

.link-categories,
.link-tags
  a
    color $textColor
</style>
