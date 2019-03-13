<template>
  <article class="post">
    <PostMeta />

    <Content
      :key="$page.path"
      class="post-content"
    />

    <PostMeta />

    <section
      v-if="useVssue"
      id="post-comments"
      class="main-div"
    >
      <Vssue
        :title="vssueTitle"
        :issue-id="vssueId"
      />
    </section>
  </article>
</template>

<script>
import PostMeta from '../components/PostMeta.vue'

export default {
  name: 'Post',

  components: {
    PostMeta,
  },

  computed: {
    vssueTitle () {
      return this.$frontmatter['vssue-title'] || this.$frontmatter['title'] || undefined
    },

    vssueId () {
      return this.$frontmatter['vssue-id'] || undefined
    },

    useVssue () {
      return this.$site.themeConfig.comments !== false && this.$frontmatter['vssue'] !== false && (this.vssueTitle || this.vssueId)
    },
  },
}
</script>
