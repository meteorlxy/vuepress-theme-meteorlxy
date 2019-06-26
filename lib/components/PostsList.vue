<template>
  <div class="main-div posts-list">
    <TransitionFadeSlide>
      <div
        v-if="listPosts.length === 0"
        class="no-posts"
        key="no-posts"
      >
        {{ $themeConfig.lang.noRelatedPosts }}
      </div>

      <div
        v-else
        class="posts-items"
        :key="page"
      >
        <TransitionFadeSlide
          tag="div"
          direction="x"
          group
        >
          <PostsListItem
            v-for="post in pagePosts"
            :key="post.path"
            :post="post"
            :each-side="2"
          />
        </TransitionFadeSlide>
      </div>
    </TransitionFadeSlide>

    <div
      v-if="total > 1"
      class="posts-paginator"
    >
      <Pagination
        v-model="page"
        :total="total"
      />
    </div>
  </div>
</template>

<script>
import TransitionFadeSlide from './TransitionFadeSlide.vue'
import PostsListItem from './PostsListItem.vue'
import Pagination from './Pagination.vue'

export default {
  name: 'PostsList',

  components: {
    TransitionFadeSlide,
    PostsListItem,
    Pagination,
  },

  props: {
    posts: {
      type: Array,
      required: false,
      default: null,
    },
  },

  data () {
    return {
      page: 1,
    }
  },

  computed: {
    perPage () {
      return this.$themeConfig.pagination.perPage || 5
    },

    total () {
      return Math.ceil(this.listPosts.length / this.perPage)
    },

    listPosts () {
      return this.posts || this.$posts
    },

    pagePosts () {
      const begin = (this.page - 1) * this.perPage
      const end = begin + this.perPage
      return this.listPosts.slice(begin, end)
    },
  },

  watch: {
    listPosts () {
      this.page = 1
    },
  },
}
</script>

<style lang="stylus" scoped>
@require '~@theme/styles/variables'

.no-posts
  color $grayTextColor
</style>
