<template>
  <Layout>
    <div
      slot="main"
      class="posts"
    >
      <PostsTagsSelect
        class="main-div"
        v-model="selectedTags"
      />

      <PostsList
        class="main-div"
        :posts="filteredPosts"
      />
    </div>
  </Layout>
</template>

<script>
import Layout from '@theme/layouts/Layout'
import PostsList from '@theme/components/PostsList'
import PostsTagsSelect from '@theme/components/PostsTagsSelect'

export default {
  name: 'Posts',

  components: {
    Layout,
    PostsList,
    PostsTagsSelect,
  },

  data () {
    return {
      selectedTags: [],
    }
  },

  computed: {
    filteredPosts () {
      if (this.selectedTags.length === 0) {
        return this.$posts
      }
      return this.$posts.filter(p => {
        const postTags = p.tags
        for (const tag of this.selectedTags) {
          if (postTags.includes(tag)) {
            return true
          }
        }
        return false
      })
    },
  },
}
</script>
