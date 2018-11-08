<template>
  <Layout>
    <div
      slot="main"
      class="page"
    >
      <Content
        :key="$page.path"
        class="page-content markdown-body"
      />
    </div>
  </Layout>
</template>

<script>
import Layout from '@theme/layouts/Layout'

export default {
  name: 'Page',

  components: {
    Layout,
  },
}
</script>
