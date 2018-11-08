<template>
  <Layout>
    <div
      slot="main"
      class="home"
    >
      <PostsList class="main-div" />
    </div>
  </Layout>
</template>

<script>
import Layout from '@theme/layouts/Layout'
import PostsList from '@theme/components/PostsList'

export default {
  name: 'Home',

  components: {
    Layout,
    PostsList,
  },
}
</script>
