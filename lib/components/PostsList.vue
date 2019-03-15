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
      return this.posts || this.$posts
    },
  },
}
</script>

<style lang="stylus" scoped>
@require '~@theme/styles/variables'

.no-posts
  color $grayTextColor
</style>
