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

      <TransitionFadeSlide
        v-else
        tag="div"
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

    <div class="posts-paginator">
      <ul v-if="total > 1">
        <li
          v-for="i in total"
          :key="i"
          :class="{
            'active': page === i,
          }"
          @click="page = i"
        >
          {{ i }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import compareDesc from 'date-fns/compare_desc'
import TransitionFadeSlide from './TransitionFadeSlide.vue'
import PostsListItem from './PostsListItem.vue'

export default {
  name: 'PostsList',

  components: {
    TransitionFadeSlide,
    PostsListItem,
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
    pagination () {
      return this.$themeConfig.pagination || {}
    },

    perPage () {
      return this.pagination.perPage || 10
    },

    total () {
      return Math.ceil(this.allPosts.length / this.perPage)
    },

    allPosts () {
      const listPosts = this.posts || this.$posts

      const pageSort = (p1, p2) => {
        if (p1.top === p2.top) {
          return compareDesc(p1.createdAt, p2.createdAt)
        }
        if (p1.top && p2.top) {
          return p1.top - p2.top
        }
        return p2.top ? 1 : -1
      }

      return listPosts.sort(pageSort)
    },

    listPosts () {
      const begin = (this.page - 1) * this.perPage
      const end = begin + this.perPage
      return this.allPosts.slice(begin, end)
    },
  },

  watch: {
    allPosts () {
      this.page = 1
    },
  },
}
</script>

<style lang="stylus" scoped>
@require '~@theme/styles/variables'

<<<<<<< HEAD
.no-posts
  color $grayTextColor
=======
.posts-paginator
  ul
    list-style none
    li
      display inline-block
      padding 0.5rem
      &.active
        color $accentColor
        font-weight bold
      &:not(.active)
        cursor pointer
>>>>>>> e240967... feat: posts pagination
</style>
