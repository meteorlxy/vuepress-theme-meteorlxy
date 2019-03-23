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

  computed: {
    listPosts () {
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
  },
}
</script>

<style lang="stylus" scoped>
@require '~@theme/styles/variables'

.no-posts
  color $grayTextColor
</style>
