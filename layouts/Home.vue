<template>
  <div class="home">
    <PostsList/>
  </div>
</template>

<script>
import PostsList from '@theme/components/PostsList'
export default {
  name: 'Home',
  components: {
    PostsList
  }
}
</script>
