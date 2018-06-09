<template>
  <div class="posts">
    <TagsSelect
      class="main-div"
      v-model="selectedTags"/>

    <PostsList
      class="main-div"
      :posts="filteredPosts"/>
  </div>
</template>

<script>
import PostsList from '../components/PostsList'
import TagsSelect from '../components/TagsSelect'
export default {
  name: 'Posts',
  components: {
    PostsList,
    TagsSelect
  },
  data () {
    return {
      selectedTags: []
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
    }
  }
}
</script>
