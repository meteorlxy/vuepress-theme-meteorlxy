<template>
  <div class="category">
    <PostsList
      class="main-div"
      :posts="$category.posts"
    />
  </div>
</template>

<script>
import PostsList from '../PostsList.vue'

export default {
  name: 'Category',

  components: {
    PostsList,
  },
}
</script>
