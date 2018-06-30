<template>
  <div class="posts-list-item">
    <router-link
      :to="post.path"
      class="post-link">
      <h3 class="post-title">{{ post.title }}</h3>
    </router-link>

    <p class="post-info-list">
      <IconInfo
        type="date"
        :text="post.createdAt"
        :fixed-width="false"/>

      <IconInfo
        v-if="post.category"
        type="category"
        :text="post.category"/>

      <IconInfo
        v-if="post.tags.length"
        type="tags"
        :text="post.tags.join(',')"/>
    </p>

    <p
      class="post-excerpt"
      v-html="post.excerpt || post.frontmatter.description || ''"></p>
  </div>
</template>

<script>
import IconInfo from '@theme/components/widgets/IconInfo'

export default {
  name: 'PostsListItem',
  components: {
    IconInfo
  },
  props: {
    post: {
      type: Object,
      required: false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@theme/styles/variables.styl'

.posts-list-item
  padding 0 0.5rem
  &:not(:last-child)
    border-bottom 1px solid $borderColor
  .post-title
    color $textColor
    transition all 0.2s
  .post-info-list
    color $lightTextColor
  .post-excerpt
    color: $grayTextColor
    text-align justify
  .post-link
    &:hover
      text-decoration none
      .post-title
        color $accentColor
</style>
