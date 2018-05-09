<template>
  <div class="posts">
    <PostsList/>
  </div>
</template>

<script>
import PostsList from '../components/PostsList'
export default {
  name: 'Posts',
  components: {
    PostsList
  }
}
</script>
