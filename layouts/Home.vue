<template>
  <div class="home">
    <PostsList class="main-div"/>
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
