<template>
  <div class="post">
    <PostMeta v-if="meta" />

    <article class="main-div">
      <Content
        :key="$page.path"
        class="post-content"
      />
    </article>

    <PostMeta v-if="meta" />

    <div
      v-if="vssue"
      id="post-comments"
      class="main-div"
    >
      <Vssue
        :title="vssueTitle"
        :issue-id="vssueId"
        :options="vssueOptions"
      />
    </div>
  </div>
</template>

<script>
import PostMeta from '../components/PostMeta.vue'

export default {
  name: 'Post',

  components: {
    PostMeta,
  },

  computed: {
    meta () {
      return this.$frontmatter['meta'] !== false
    },

    vssue () {
      return this.$themeConfig.comments !== false && this.$frontmatter['vssue'] !== false && (this.vssueTitle || this.vssueId)
    },

    vssueTitle () {
      return this.$frontmatter['vssue-title'] || this.$frontmatter['title'] || undefined
    },

    vssueId () {
      return this.$frontmatter['vssue-id'] || undefined
    },

    vssueOptions () {
      if (this.$themeConfig.comments && (
        typeof this.$themeConfig.comments.platform === 'undefined' ||
        this.$themeConfig.comments.platform === 'github'
      )) {
        const labels = (this.$themeConfig.comments && this.$themeConfig.comments.labels) || ['Vssue']
        return {
          labels: labels.concat(this.vssueTitle.replace(/,/g, '')),
        }
      }
      return {}
    },
  },
}
</script>
