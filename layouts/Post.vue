<template>
  <article class="post">
    <section
      v-if="$page.frontmatter.type !== 'page'"
      class="post-meta main-div">
      <section class="post-date clearfix">
        <span class="create-date">发布时间：{{ createdAt }}</span>

        <span
          v-if="showUpdatedAt"
          class="update-date">
          最后修改：{{ updatedAt }}
        </span>
      </section>

      <section
        v-if="$page.frontmatter.tags"
        class="post-tags">
        <PostTag
          v-for="tag in $page.frontmatter.tags"
          :key="tag"
          :name="tag"/>
      </section>

      <section class="post-links">
        <router-link
          v-if="prevPost"
          :to="prevPost.path"
          class="post-link">
          上一篇：{{ prevPost.title }}
        </router-link>

        <router-link
          v-if="nextPost"
          :to="nextPost.path"
          class="post-link">
          下一篇：{{ nextPost.title }}
        </router-link>
      </section>
    </section>
    
    <Content
      :key="$page.path"
      class="post-content markdown-body"/>
  </article>
</template>

<script>
import PostTag from '@theme/components/widgets/PostTag'
import moment from 'moment'
export default {
  name: 'Post',
  components: {
    PostTag
  },
  computed: {
    createdAt () {
      return moment(this.$page.frontmatter.date).format('YYYY-MM-DD')
    },
    showUpdatedAt () {
      return Boolean(this.$page.lastUpdated)
    },
    updatedAt () {
      return this.showUpdatedAt
        ? moment(this.$page.lastUpdated).format('YYYY-MM-DD')
        : null
    },
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
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@theme/styles/variables.styl'
.post
  .post-meta
    .post-date
      color lighten($grayTextColor, 50%)
      margin-bottom 1rem
      .create-date
        float left
      .update-date
        float right
    .post-tags
      margin 1rem 0
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
