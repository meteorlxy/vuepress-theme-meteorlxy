<template>
  <Layout>
    <article
      slot="main"
      class="post"
    >
      <PostMeta />

      <Content
        :key="$page.path"
        class="post-content markdown-body"
      />

      <PostMeta />
    </article>
  </Layout>
</template>

<script>
import Layout from '@theme/layouts/Layout'
import PostMeta from '@theme/components/PostMeta'

export default {
  name: 'Post',

  components: {
    Layout,
    PostMeta,
  },
}
</script>
