<template>
  <div class="main-div">
    <div
      v-if="categories"
      class="filter-categories"
    >
      <h3>
        <RouterLink to="/posts/categories/">
          {{ $themeConfig.lang.categories }}
        </RouterLink>
      </h3>

      <PostsFilterCategories v-model="filterCategory" />
    </div>

    <div
      v-if="tags"
      class="filter-tags"
    >
      <h3>
        <RouterLink to="/posts/tags/">
          {{ $themeConfig.lang.tags }}
        </RouterLink>
      </h3>

      <PostsFilterTags v-model="filterTags" />
    </div>

    <div
      v-if="search"
      class="filter-search"
    >
      <h3>
        {{ $themeConfig.lang.search }}
      </h3>

      <PostsFilterSearch v-model="filterSearch" />
    </div>
  </div>
</template>

<script>
import PostsFilterCategories from '../components/PostsFilterCategories.vue'
import PostsFilterTags from '../components/PostsFilterTags.vue'
import PostsFilterSearch from '../components/PostsFilterSearch.vue'

export default {
  name: 'PostsFilter',

  components: {
    PostsFilterCategories,
    PostsFilterTags,
    PostsFilterSearch,
  },

  props: {
    posts: {
      type: Array,
      required: false,
      default: null,
    },
    categories: {
      type: Boolean,
      required: false,
      default: true,
    },
    tags: {
      type: Boolean,
      required: false,
      default: true,
    },
    search: {
      type: Boolean,
      required: false,
      default: true,
    },
    value: {
      type: Array,
      required: false,
      default: () => [],
    },
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
      let filteredPosts = this.posts || this.$posts

      if (this.categories && this.filterCategory) {
        filteredPosts = filteredPosts.filter(p => p.category === this.filterCategory)
      }

      if (this.tags && this.filterTags.length !== 0) {
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

      if (this.search && this.filterSearch !== '') {
        const searchString = this.filterSearch.toLowerCase().trim()
        const match = item => {
          if (typeof item === 'string') {
            return item.toLowerCase().includes(searchString)
          }

          if (Array.isArray(item)) {
            return item.map(i => match(i)).includes(true)
          }

          return false
        }
        filteredPosts = filteredPosts.filter(p =>
          match(p.title) ||
          match(p.excerpt) ||
          match(p.frontmatter.description) ||
          match(p.tags) ||
          match(p.category)
        )
      }

      return filteredPosts
    },
  },

  watch: {
    filteredPosts: {
      immediate: true,
      handler (val) {
        this.$emit('input', val)
      },
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
