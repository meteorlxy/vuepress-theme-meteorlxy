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

      <h3 class="filter-search">
        {{ $themeConfig.lang.search }}
      </h3>

      <PostsFilterSearch v-model="filterSearch" />
    </div>

    <div class="main-div">
      <TransitionFadeSlide>
        <div
          v-if="filteredPosts.length ===0"
          class="no-posts"
        >
          {{ $themeConfig.lang.noRelatedPosts }}
        </div>

        <PostsList
          v-else
          :posts="filteredPosts"
        />
      </TransitionFadeSlide>
    </div>
  </div>
</template>

<script>
import PostsList from '../components/PostsList.vue'
import PostsFilterCategories from '../components/PostsFilterCategories.vue'
import PostsFilterTags from '../components/PostsFilterTags.vue'
import PostsFilterSearch from '../components/PostsFilterSearch.vue'
import TransitionFadeSlide from '../components/TransitionFadeSlide.vue'

export default {
  name: 'Posts',

  components: {
    PostsList,
    PostsFilterCategories,
    PostsFilterTags,
    PostsFilterSearch,
    TransitionFadeSlide,
  },

  data () {
    return {
      filterTags: [],
      filterCategory: null,
      filterSearch: '',
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

      if (this.filterSearch !== '') {
        const searchString = this.filterSearch.toLowerCase().trim()
        filteredPosts = filteredPosts.filter(p => p.title.includes(searchString) ||
          (p.excerpt && p.excerpt.includes(searchString)) ||
          (p.frontmatter.description && p.frontmatter.description.includes(searchString)) ||
          (p.tags && p.tags.includes(searchString)) ||
          (p.category && p.category.includes(searchString))
        )
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

<style lang="stylus" scoped>
@require '~@theme/styles/variables'

.no-posts
  color $grayTextColor
</style>
