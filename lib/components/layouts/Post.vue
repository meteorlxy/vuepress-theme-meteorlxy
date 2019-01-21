<template>
  <article class="post">
    <PostMeta />

    <Content
      :key="$page.path"
      class="post-content"
    />

    <section
      v-if="useVssue"
      class="main-div"
    >
      <Vssue
        :title="vssueTitle"
        :issue-id="vssueId"
        :options="$site.themeConfig.comments"
      />
    </section>
  </article>
</template>

<script>
import PostMeta from '../PostMeta.vue'

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
      return this.$frontmatter['vssue'] !== false && (this.vssueTitle || this.vssueId)
    },
  },
}
</script>
