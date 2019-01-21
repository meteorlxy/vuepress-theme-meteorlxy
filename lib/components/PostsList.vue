<template>
  <TransitionFadeSlide
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
