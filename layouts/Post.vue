<template>
  <article class="post">
    <section
      v-if="$page.frontmatter.type !== 'page'"
      class="post-info main-div">
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
    </section>
    
    <Content
    :key="$page.path"
    class="post-content"/>
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
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@theme/styles/variables.styl'
.post
  .post-info
    margin-bottom 1rem
    .post-date
      color lighten($grayTextColor, 50%)
      margin-bottom 1rem
      .create-date
        float left
      .update-date
        float right
</style>
