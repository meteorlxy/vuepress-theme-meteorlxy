<template>
  <section class="post-meta main-div">
    <section class="post-date clearfix">
      <span
        v-if="$page.createdAt"
        class="create-date"
      >
        {{ `${$themeConfig.lang.createdAt} : ${$page.createdAt}` }}
      </span>

      <span
        v-if="$page.updatedAt"
        class="update-date"
      >
        {{ `${$themeConfig.lang.updatedAt} : ${$page.updatedAt}` }}
      </span>
    </section>

    <section class="post-links">
      <RouterLink
        v-if="prevPost"
        :to="prevPost.path"
        class="post-link"
      >
        {{ `${$themeConfig.lang.prevPost} : ${prevPost.title}` }}
      </RouterLink>

      <RouterLink
        v-if="nextPost"
        :to="nextPost.path"
        class="post-link"
      >
        {{ `${$themeConfig.lang.nextPost} : ${nextPost.title}` }}
      </RouterLink>
    </section>
  </section>
</template>

<script>
export default {
  name: 'PostMeta',

  computed: {
    thisIndex () {
      return this.$posts.indexOf(this.$page)
    },

    prevPost () {
      const nextIndex = this.thisIndex + 1
      return nextIndex > this.$posts.length - 1 ? null : this.$posts[nextIndex]
    },

    nextPost () {
      const prevIndex = this.thisIndex - 1
      return prevIndex < 0 ? null : this.$posts[prevIndex]
    },
  },
}
</script>

<style lang="stylus" scoped>
@require '~@theme/styles/variables'

.post-meta
  .post-date
    color lighten($grayTextColor, 50%)
    margin-bottom 1rem
    .create-date
      float left
    .update-date
      float right
  .post-links
    .post-link
      display block
      line-height 1.7
      color lighten($grayTextColor, 20%)
      font-weight normal
      transition all 0.2s
      &:hover
        color $accentColor
</style>
