<template>
  <Layout>
    <div
      slot="main"
      class="posts"
    >
      <div class="main-div">
        <h3>Categories</h3>

        <PostsCategoriesSelect v-model="selectedCategory" />

        <h3>Tags</h3>

        <PostsTagsSelect v-model="selectedTags" />
      </div>

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
import PostsCategoriesSelect from '@theme/components/PostsCategoriesSelect'
import PostsTagsSelect from '@theme/components/PostsTagsSelect'

export default {
  name: 'Posts',

  components: {
    Layout,
    PostsList,
    PostsCategoriesSelect,
    PostsTagsSelect,
  },

  data () {
    return {
      selectedTags: [],
      selectedCategory: null,
    }
  },

  computed: {
    filteredPosts () {
      let filteredPosts = this.$posts

      if (this.selectedCategory) {
        filteredPosts = filteredPosts.filter(p => p.category === this.selectedCategory)
      }

      if (this.selectedTags.length !== 0) {
        filteredPosts = filteredPosts.filter(p => {
          const postTags = p.tags
          for (const tag of this.selectedTags) {
            if (postTags.includes(tag)) {
              return true
            }
          }
          return false
        })
      }
      return filteredPosts
    },
  },
}
</script>
