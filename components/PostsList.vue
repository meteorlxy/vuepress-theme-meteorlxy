<template>
  <TransitionFadeSlide
    tag="div"
    class="posts-list"
    direction="x"
    group>
    <div
      v-for="post in listPosts"
      :key="post.path"
      class="post-item">
        <router-link
          :to="post.path"
          class="post-link">
          <h3 class="post-title">{{ post.title }}</h3>

          <p class="post-desc">{{ post.frontmatter.description || '' }}</p>
        </router-link>

        <p
          v-if="post.frontmatter.tags"
          class="post-tags">
          <PostTag
            v-for="tag in post.frontmatter.tags"
            :key="tag"
            :name="tag"/>
        </p>
    </div>
  </TransitionFadeSlide>
</template>

<script>
import TransitionFadeSlide from '@theme/components/transitions/TransitionFadeSlide'
import PostTag from '@theme/components/widgets/PostTag'
export default {
  name: 'PostsList',
  components: {
    TransitionFadeSlide,
    PostTag
  },
  computed: {
    listPosts () {
      return this.$posts
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@theme/styles/variables.styl'

.posts-list
  .post-item
    padding 0 0.5rem
    &:not(:last-child)
      border-bottom 1px solid $borderColor
    .post-link
      .post-title
        color $textColor
        transition all 0.2s
      .post-desc
        color: $grayTextColor
        text-align justify
      &:hover
        text-decoration none
        .post-title
          color $accentColor
</style>

