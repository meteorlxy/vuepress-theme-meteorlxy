<template>
  <div class="postlist">
    <div class="main-div">
      <h3 class="filter-search">
        {{ $themeConfig.lang.search }}
      </h3>

      <PostsFilterSearch v-model="filterSearch" />
    </div>

    <div class="main-div">
      <TransitionFadeSlide>
        <div
          v-if="listPosts.length ===0"
          class="no-posts"
        >
          {{ $themeConfig.lang.noRelatedPosts }}
        </div>

        <TransitionFadeSlide
          v-else
          tag="div"
          class="posts-list"
          direction="x"
          group
        >
          <PostsListItem
            v-for="post in listPosts"
            :key="post.path"
            :post="post"
          />
        </TransitionFadeSlide>
      </TransitionFadeSlide>
    </div>
  </div>
</template>

<script>
import TransitionFadeSlide from './TransitionFadeSlide.vue'
import PostsListItem from './PostsListItem.vue'
import PostsFilterSearch from '../components/PostsFilterSearch.vue'

export default {
  name: 'PostsList',

  components: {
    TransitionFadeSlide,
    PostsListItem,
    PostsFilterSearch,
  },

  data () {
    return {
      filterSearch: '',
    }
  },

  props: {
    posts: {
      type: Array,
      required: false,
      default: null,
    },
  },

  computed: {
    listPosts () {
      const posts = this.posts || this.$posts

      if (this.filterSearch !== '') {
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
        return posts.filter(p =>
          match(p.title) ||
          match(p.excerpt) ||
          match(p.frontmatter.description) ||
          match(p.tags) ||
          match(p.category)
        )
      }

      return posts
    },
  },
}
</script>

<style lang="stylus" scoped>
@require '~@theme/styles/variables'

.no-posts
  color $grayTextColor
</style>
